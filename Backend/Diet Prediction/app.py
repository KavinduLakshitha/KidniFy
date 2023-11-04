import pickle
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the trained model
CKD_Diet_Prediction = pickle.load(open("models/random_forest_model.pkl", "rb"))


@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    print("Input Data:", data)

    stage = int(data.get("stage") or 1)
    potassium = float(data.get("potassium") or 0)
    sodium = float(data.get("sodium") or 0)
    hemoglobin = float(data.get("hemoglobin") or 0)
    calcium = float(data.get("calcium") or 0)
    phosphorus = float(data.get("phosphorus") or 0)
    cholesterol = float(data.get("cholesterol") or 0)

    CKD_diet_data = [
        stage,
        calcium,
        potassium,
        phosphorus,
        sodium,
        hemoglobin,
        cholesterol,
    ]

    print("Input Data:", CKD_diet_data)

    prediction = CKD_Diet_Prediction.predict([CKD_diet_data])

    if prediction == 1:
        risk_level = "Low"
    elif prediction == 2:
        risk_level = "Safe"
    elif prediction == 3:
        risk_level = "Caution"
    elif prediction == 4:
        risk_level = "Danger"

    return jsonify({"prediction": risk_level})

    prediction = CKD_Diet_Prediction.predict([CKD_diet_data])

    return jsonify({"prediction": int(prediction[0])})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)
