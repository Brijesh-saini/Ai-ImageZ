🎨 Ai-ImageZ - AI Image Generator

Ai-ImageZ is a full-stack web application that allows users to generate stunning images from text prompts using AI. It features a complete user authentication system, a credit-based usage model, and a responsive UI built with the MERN stack (MongoDB, Express, React, Node.js).

✨ Features

AI Image Generation: Convert text prompts into high-quality images using the Clipdrop API.

User Authentication: Secure Signup and Login functionality using JWT (JSON Web Tokens).

Credit System: Users start with free credits and consume them per generation.

Free Credit Claim: Users can easily claim additional free credits (Payment gateway removed for simplicity).

Responsive Design: Fully optimized for desktop, tablet, and mobile devices using Tailwind CSS.

Download & Share: Users can download their generated creations.

🛠️ Tech Stack

Frontend

React.js (Vite)

Tailwind CSS (Styling)

Framer Motion (Animations)

Axios (API Requests)

React Router DOM (Navigation)

Backend

Node.js & Express.js (Server)

MongoDB & Mongoose (Database)

JSON Web Token (JWT) (Authentication)

Bcrypt.js (Password Hashing)

Form-Data (Handling image data)

🚀 Getting Started

Follow these steps to run the project locally on your machine.

1. Prerequisites

Make sure you have the following installed:

Node.js

MongoDB (Local or Atlas URL)

A Clipdrop API Key

2. Installation

Clone the repository:

git clone <repository_url>
cd ai-imagez


Backend Setup

Navigate to the server folder and install dependencies:

cd server
npm install


Frontend Setup

Open a new terminal, navigate to the client folder, and install dependencies:

cd client
npm install


3. Configuration (.env)

You must create environment variables for both the Server and the Client to ensure they communicate correctly.

Server Configuration

Create a file named .env inside the server/ folder and add the following:

# Server Port
PORT=4000

# MongoDB Connection String (Ensure this matches your config/mongodb.js variable name)
MONGODB_URL="your_mongodb_connection_string_here"

# Security Key for User Tokens (Generate a random string)
JWT_SECRET="your_random_secret_key_here"

# Clipdrop API Key (For Image Generation)
CLIPDROP_API="your_clipdrop_api_key_here"


Client Configuration

Create a file named .env inside the client/ folder and add the following:

# URL of your backend server (Must match the server PORT)
VITE_BACKEND_URL='http://localhost:4000'


Note: Do not put a slash / at the end of the URL.

🏃‍♂️ Running the App

1. Start the Backend Server

Inside the server/ directory:

npm run server
# or
node server.js


You should see: Server started on PORT:4000 and Database Connected Successfully.

2. Start the Frontend

Inside the client/ directory:

npm run dev


Open the URL shown in the terminal (usually http://localhost:5173) to view the app.

📂 Project Structure

Ai-ImageZ/
├── client/                 # Frontend React Application
│   ├── public/
│   ├── src/
│   │   ├── assets/         # Images and icons
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # App Context (State Management)
│   │   ├── pages/          # Main pages (Home, Result, BuyCredit)
│   │   └── ...
│   ├── .env                # Frontend environment variables
│   └── ...
│
├── server/                 # Backend Node.js Application
│   ├── config/             # Database configuration
│   ├── controllers/        # Logic for User and Image routes
│   ├── middlewares/        # Auth middleware
│   ├── models/             # Mongoose Schemas (User, Transaction)
│   ├── routes/             # API Routes
│   ├── .env                # Backend environment variables
│   └── server.js           # Entry point
└── ...


📡 API Endpoints

Method

Endpoint

Description

POST

/api/user/register

Register a new user

POST

/api/user/login

Login existing user

GET

/api/user/credits

Get current user balance

POST

/api/user/add-credits

Add free credits to user account

POST

/api/image/generate-image

Generate image from prompt

🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

📄 License

This project is open-source and available under the MIT License.
