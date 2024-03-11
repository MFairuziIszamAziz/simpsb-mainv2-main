import React from 'react';
import AuthForm from '../AuthForm';
import './Login.css';

const Login = () => {
  return (
    <div className='login-container'>
      <h1>Login</h1>
      <div className='login-form'>
      <AuthForm formType="login" />
      </div>
    </div>
  );
};

export default Login;
