# 🔐 MERN Authentication System

A full-stack authentication application built using the MERN stack. This project implements secure user registration, login, JWT-based authentication, protected routes, password hashing, and form validation.

## 🚀 Features

* User Signup & Login
* Secure Password Hashing with Bcrypt
* JWT Authentication & Authorization
* Protected Routes
* Form Validation using Joi
* MongoDB Database Integration
* Logout Functionality
* Persistent Login using Local Storage
* Toast Notifications
* RESTful API Architecture

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* React Toastify
* Fetch API
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Tokens)
* Bcrypt
* Joi

## 📂 Project Structure

```bash
├── frontend
│   ├── src
│   │   ├── pages
│   │   ├── components
│   │   ├── utils
│   │   └── App.jsx
│
├── backend
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── db.js
│   └── index.js
```

## 🔑 Authentication Flow

1. User registers with name, email, and password.
2. Password is hashed using Bcrypt before storing in MongoDB.
3. User logs in with valid credentials.
4. Server generates a JWT token.
5. Token is stored in Local Storage.
6. Protected routes verify the JWT before granting access.
7. Users can securely log out by removing the token.

## 📸 Screenshots

### Login Page

(Add Screenshot)

### Signup Page

(Add Screenshot)

### Home Page

(Add Screenshot)

## 🌐 Live Demo

🔗 Live Link: YOUR_LIVE_LINK_HERE

## 💻 Source Code

🔗 GitHub Repository: YOUR_GITHUB_REPOSITORY_LINK

## 🎯 What I Learned

* Authentication & Authorization
* JWT Token Management
* Password Hashing with Bcrypt
* Express Middleware
* REST APIs
* MongoDB & Mongoose
* React Hooks
* Protected Routes
* Frontend & Backend Integration

## 🚀 Future Improvements

* Role-Based Authentication
* Refresh Tokens
* User Profile Management
* Forgot Password Functionality
* Email Verification
* Deployment with CI/CD

## 👨‍💻 Author

Nitin Kumar

* LinkedIn: https://www.linkedin.com/in/nitin-kumar-491813336/
* GitHub: https://github.com/nitinkumar-07

⭐ If you found this project helpful, consider giving it a star.
