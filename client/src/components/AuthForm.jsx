import React, { useState } from 'react';
import './AuthForm.css';

const AuthForm = ({ formType }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Tambahkan logika autentikasi atau pendaftaran di sini
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="auth-card">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">{formType === 'login' ? 'Login' : 'Signup'}</button>
      </form>
      {formType === 'login' && (
        <p>Belum punya akun? <a href="/signup">Signup</a></p>
      )}
    </div>
  );
};

export default AuthForm;
