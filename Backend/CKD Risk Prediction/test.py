import requests

# Define the API endpoint URL
api_url = "http://192.168.8.156:5000/predict"  # Replace with your actual API URL

# Define the input data as a dictionary
input_data = {
    "age": 59,
    "gender": 0,
    "feature3": 1,
    "feature4": 1,
    "feature5": 1,
    "feature6": 0,
    "feature7": 1,
    "feature8": 1,
    "feature9": 1,
    "feature10": 1,
    "feature11": 2,
    "feature12": 1,
}

# Send a POST request to the API
response = requests.post(api_url, json=input_data)

# Check the response status code
if response.status_code == 200:
    # If the request was successful, parse the JSON response
    result = response.json()
    prediction = result["prediction"]
    print("Predicted CKD Risk:", prediction)
else:
    print("Error:", response.status_code, response.text)
