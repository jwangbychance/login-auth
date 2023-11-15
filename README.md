# login-auth

Vite React + Express.js app.

Web application, built using the MERN stack using cookie sessions for authentication.

## Prerequisites

A MongoDB account is required to set up MongoDB. Learn how to set up MongoDB using this [video](https://www.youtube.com/watch?v=bBA9rUdqmgY).

## Installation

Clone the repository

```script
git clone https://github.com/jwangbychance/login-auth.git
```

Once the repo is cloned, run the following command in both `client` and `server` to install the dependencies:

```bash
npm install
```

## Environment Variables

The project uses several environment variables for configuration. A `.env` file is required for both the `client` and `server` directories following the `.env.example`.

For the client:

- `CLIENT_PORT`: This variable determines the port on which the client application wil run. When you start the client-side of the application, it will be accessible at `http://localhost:CLIENT_PORT`. Make sure this port is available and not in use by other services.

- `PROXY_PORT`: This variable defines the port on which the proxy server operates. The proxy server is responsible for backend API requests. With this configuration, requests starting with /api will be redirected to the specified target server at `http://localhost:PROXY_PORT`. Make sure this port is available and not in use by other services.

For the server:

- `PORT`: The port the backend server will run on. Ensure that this port is not in use by other services. When you start the backend server, it will listen for incoming requests on the specified `PORT`.

- `MONGO_CONNECTION`: Represents the connection string for your MongoDB database. Update this variable with the appropriate MongoDB connection string that includes the host, port and authentication details. `MONGO_CONNECTION=mongodb://username:password@localhost:27017/your-database`.

- `SESSION_SECRET`: Serves as the secret key used for session management. It is utilised to encrypt session data and initialise the session middleware securely. Make sure to set a strong and unique secret to enhance the security of your session handling.

- `MEMBER_KEY`: This string variable is used to authenticate users when they attempt to read messages on the client side. Users must enter the correct `MEMBER_KEY` in an input field to access restricted content.

## Getting Started

First, run the client:

```bash
npm run dev
```

And the server:

```bash
npm start
```

Open `localhost` with your browser and appending the port number from the `.env` file.

API routes can be accessed similarly with a different port number from the `.env` file.

## Usage

Check the diagram flow on [Draw.io](https://drive.google.com/file/d/1KpuT38paCEEApsCH4Xb3XWCDRhAqzS1F/view) to see the intended usage of the project.

## Built with

- React
- NodeJS
- Express
- MongoDB
- Tailwind CSS
