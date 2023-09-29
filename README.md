# login-auth

Vite React + Express

Web application, built using the MERN stack using cookie sessions for authentication.

## Prerequisites

A MongoDB account is required to set up a Mongo database.

Clone the repo

```script
git clone git@github.com:jwangbychance/login-auth.git
```

A `.env` file is required for both the `client` and `server` directories following the `.env.example`.

## Installing

Once the repo is cloned, run the following command in both `client` and `server` to install the dependencies:

```bash
npm install
# or
npm i
```

## Getting Started

First, run the client:

```bash
npm run dev
```

And the server:

```bash
node index.js
```

Open `localhost` with your browser and appending the port number from the `.env` file.

API routes can be accessed similarly with a different port number from the `.env` file.

## Built with

- React
- NodeJS
- Express
- MongoDB
- Tailwind CSS

## Todos

- Refactor to TypeScript
- Allow users to change their passwords
- Users can create messages
- Authorisation for admin users
- More features to come... &#x1f914;
