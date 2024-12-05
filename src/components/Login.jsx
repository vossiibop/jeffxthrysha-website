// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles.css"

const Login = ({ setAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enter credentials below
    const validPassword = '061323';

    if (password === validPassword) {
      setAuth(true);
      navigate('/protected');
    } else {
      alert('Invalid password');
    }
  };

  return (
      <section className='loginPage'>
        <h1>Enter password to view this site</h1>
        <form onSubmit={handleSubmit} className='loginForm'>
          <div className='input-box'>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <label>Password</label>
          </div>
          <button type="submit">SUBMIT</button>
        </form>
        </section>
  );
};

export default Login;
