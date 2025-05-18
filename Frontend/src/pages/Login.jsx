// src/pages/Login.jsx
import React from "react";
import "../App.css";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="login-page">
      <h2 className="page-title">Login</h2>
      <LoginForm />
    </div>
  );
};

export default Login;



