from flask import Flask, request, jsonify
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

@app.route('/station_status', methods=['GET'])
def station_status():
    try:
        # Make an HTTP GET request to the URL
        response = requests.get("https://gbfs.bcycle.com/bcycle_madison/station_status.json")

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

@app.route('/station_information/<string:station_name>', methods=['GET'])
def station_information(station_name):
    if request.method == 'GET':
        # Handle POST request, e.g., process data for the item_name
        # data = response.json()  # Assuming you're sending JSON data
        # Process data and return a response
        print(station_name)
        return information(station_name)
        # return jsonify({'station_name': station_name})

def information(station_name):
    try:
        # Make an HTTP GET request to the URL
        response = requests.get("https://gbfs.bcycle.com/bcycle_madison/station_information.json")

        # Check if the request was successful (status code 200)
        if response.status_code == 200:
            # Parse the JSON response
            data = response.json()
            name = station_name
            filtered_data = [station for station in data['data']['stations'] if station['station_id'] == name]
            print(filtered_data)

            if filtered_data:
                return jsonify(filtered_data)
            else:
                return jsonify({'message': f'Station with name "{name}" not found'}), 404

            # Return the JSON data as a response
            # print(data)
            # return jsonify(data)

        else:
            return "Failed to fetch JSON data. Status code: " + str(response.status_code)

    except Exception as e:
        return "An error occurred: " + str(e)

if __name__ == "__main__":
    app.run(debug=True)