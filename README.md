# User Feedback System

A full-stack application for collecting, storing, and displaying user feedback with filtering and sorting capabilities.

## Project Overview

This project is a user feedback system with the following features:
- User feedback submission form
- Secure storage of feedback in MongoDB
- Dashboard to display feedback with filtering and sorting options
- Categorization of feedback (suggestion, bug report, feature request)

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose ODM)

### Frontend
- React
- React Router
- CSS (with responsive design)

## Project Structure

```
user-feedback-system/
├── client/                 # Frontend React application
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API service functions
│   │   ├── App.js          # Main App component
│   │   └── index.js        # Entry point
│   └── package.json        # Frontend dependencies
│
├── server/                 # Backend Node.js/Express application
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── index.js            # Entry point
│   └── package.json        # Backend dependencies
│
└── README.md               # Project documentation
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas account)

### Installation

1. Clone the repository

2. Install backend dependencies:
   ```
   cd server
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd client
   npm install
   ```

4. Create a `.env` file in the server directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/feedback-system
   ```

### Running the Application

1. Start the backend server:
   ```
   cd server
   npm start
   ```

2. Start the frontend development server:
   ```
   cd client
   npm start
   ```

3. Access the application at `http://localhost:3000`

## API Endpoints

- `POST /api/feedback` - Submit new feedback
- `GET /api/feedback` - Retrieve all feedback entries
- `GET /api/feedback?category=suggestion` - Filter feedback by category

## Application Architecture

The application follows a client-server architecture:

1. **Frontend (React)**: Handles user interface, form submission, and dashboard display
2. **Backend (Node.js/Express)**: Processes API requests, implements business logic
3. **Database (MongoDB)**: Stores feedback data securely

Data flows from the user input form to the backend API, which stores it in the database. The dashboard retrieves data from the backend API and displays it with filtering and sorting options.