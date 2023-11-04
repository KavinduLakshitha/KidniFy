import pickle
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the trained model
Water_Quality_Testing = pickle.load(open("models/LR_cls_weight_model.pkl", "rb"))


@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    print("Input Data:", data)

    location = int(data.get("location") or 0)
    pHValue = float(data.get("pHValue") or 0)
    turbidity = float(data.get("turbidity") or 0)
    temperature = float(data.get("temperature") or 0)
    tds = float(data.get("tds") or 0)

    water_quality_data = [location, temperature, pHValue, turbidity, tds]

    print("Input Data:", water_quality_data)

    prediction = Water_Quality_Testing.predict([water_quality_data])

    return jsonify({"prediction": int(prediction[0])})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
