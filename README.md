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

## 🌐 Live Demo

🔗 Live Link: https://mern-auth-ui-e1gu.onrender.com


## 📸 Screenshots

### Login Page

<img width="1919" height="1021" alt="Screenshot 2026-06-09 074536" src="https://github.com/user-attachments/assets/870174ec-3b39-48f5-bfd0-17cd44fabaf1" />


### Signup Page

<img width="1917" height="1015" alt="Screenshot 2026-06-09 074239" src="https://github.com/user-attachments/assets/d5ec8ded-91a6-4b50-811c-152100203b2f" />


### Home Page

<img width="1918" height="1020" alt="Screenshot 2026-06-09 074344" src="https://github.com/user-attachments/assets/85de81ff-55e0-49fc-ac2f-837332361eaf" />


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
