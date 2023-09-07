from flask import Flask, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route('/')
def index():
    return 'Hello World!'

@app.route('/gbfs', methods=['GET'])
def gbfs():
    try:
        # Make an HTTP GET request to the URL
        response = requests.get("https://gbfs.bcycle.com/bcycle_madison/gbfs.json")

        # Check if the request was successful (status code 200)
        if response.status_code == 200:
            # Parse the JSON response
            data = response.json()

            # Return the JSON data as a response
            return jsonify(data)

        else:
            return "Failed to fetch JSON data. Status code: " + str(response.status_code)

    except Exception as e:
        return "An error occurred: " + str(e)

if __name__ == "__main__":
    app.run(debug=True)