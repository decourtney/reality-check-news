import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../components/API';

function Login({ setLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.login(email, password);
      localStorage.setItem('token', response.data.token);
      setLoggedIn(true);
      navigate('/');
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  if (localStorage.getItem('token')) {
    navigate('/');
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <div>{error}</div>}
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
}

export default Login;
