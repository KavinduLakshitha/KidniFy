import pickle
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the trained model
CKD_Risk_Prediction = pickle.load(open("models/Logistic_Regression_model.pkl", "rb"))


@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    print("Input Data:", data)

    age = int(data.get("age") or 0)
    gender = 1 if data.get("gender") == "Male" else 0
    color = int(data.get("color") or 1)
    medications = 1 if data.get("medications") else 0
    overweight = 1 if data.get("overweight") else 0
    smoking = 1 if data.get("smoking") else 0
    alcohol = 1 if data.get("alcohol") else 0
    diabetes = 1 if data.get("diabetes") else 0
    frequent = 1 if data.get("frequent") else 0
    blockage = 1 if data.get("blockage") else 0
    swelling = 1 if data.get("swelling") else 0
    history = 1 if data.get("history") else 0

    CKD_risk_data = [
        age,
        gender,
        color,
        medications,
        overweight,
        smoking,
        alcohol,
        diabetes,
        frequent,
        blockage,
        swelling,
        history,
    ]

    print("Input Data:", CKD_risk_data)

    prediction = CKD_Risk_Prediction.predict([CKD_risk_data])[0]

    if prediction == 1:
        risk_level = "Risky"
    else:
        risk_level = "Not Risky"

    return jsonify({"prediction": risk_level})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5004, debug=True)
