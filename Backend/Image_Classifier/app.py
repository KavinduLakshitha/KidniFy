from flask import Flask, request, jsonify
import cv2
import numpy as np
import tensorflow
from tensorflow.keras.models import load_model
from flask_cors import CORS


app = Flask(__name__)

CORS(app)


# Load models
resnet_model = load_model("depthwise_separable_resnet_model.keras")

# Threshold for positive prediction
THRESHOLD = 0.85


@app.route("/predict", methods=["POST"])
def predict():
    # Get image
    image = request.files["image"].read()
    image_data = np.frombuffer(image, np.uint8)
    img = cv2.imdecode(image_data, cv2.IMREAD_COLOR)

    # # Preprocess
    # img = cv2.resize(img, (128, 128))
    # img = img.reshape(1, 128, 128, 3)

    # Predict
    resnet_pred = resnet_model.predict(img)[0][0]

    # Classify
    if resnet_pred > THRESHOLD:
        resnet_label = "CKD"
    else:
        resnet_label = "Normal"

    # Return
    data = {
        "resnet_pred": float(resnet_pred),
        "resnet_label": resnet_label
        # Other models
    }

    return jsonify(data)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5002, debug=True)
