import React from 'react';
import AuthForm from '../AuthForm';
import './SignUp.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='signup-container'>
      <h1>Sign up</h1>
      <div className='signup-form'>
      <AuthForm formType="signup"/>
      <p>Sudah punya akun? <Link to="/login">Silahkan login disini</Link></p>
      </div>
    </div>
  );
};

export default Signup;
