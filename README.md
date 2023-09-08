# General Bikeshare Feed Specification DEMO

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Stacks

This was project was made with React.js, Flask and Docker Containers.

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop) - Make sure you have Docker installed on your machine.

### `docker-compose up --build`

Can be use to build the container running the application.

### Project Structure

- `./backend`             - Contains the Flask backend code.
- `./`                    - Contains the React frontend code.
- `../docker-compose.yml` - Defines the services for Flask and React.

Note: The context in the docker compose file is configured so that the file has to be one directory up the project directory.

### Usage
The Flask API is accessible at http://localhost:5000.
The React app is accessible at http://localhost:3000.

