import pickle
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the trained model
Stage_Prediction = pickle.load(open("models/tree_model.pkl", "rb"))


@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    print("Input Data:", data)
    age = int(data.get("age") or 0)
    gender = 1 if data.get("gender") == "Male" else 0
    bloodpressure = float(data.get("bloodpressure") or 0)
    bloodsugar = float(data.get("bloodsugar") or 0)
    albumin = float(data.get("albumin") or 0)
    hemoglobin = float(data.get("hemoglobin") or 0)
    serumcreatinine = float(data.get("serumcreatinine") or 0)
    nitrogen = float(data.get("nitrogen") or 0)
    sodium = float(data.get("sodium") or 0)
    potassium = float(data.get("potassium") or 0)
    wbc = float(data.get("wbc") or 0)
    rbc = float(data.get("rbc") or 0)
    protein = float(data.get("protein") or 0)

    stage_data = [
        age,
        gender,
        bloodpressure,
        bloodsugar,
        albumin,
        hemoglobin,
        serumcreatinine,
        nitrogen,
        sodium,
        potassium,
        wbc,
        rbc,
        protein,
    ]

    print("Input Data:", stage_data)

    prediction = Stage_Prediction.predict([stage_data])

    return jsonify({"prediction": int(prediction[0])})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5003, debug=True)
