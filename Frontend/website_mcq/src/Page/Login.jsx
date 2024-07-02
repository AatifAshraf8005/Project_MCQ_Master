import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
const navigate =useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password, name };
    const url = `http://localhost:5000/api/auth/${isLogin ? 'login' : 'signup'}`;

    try {
      const res = await axios.post(url, user);
      console.log(res.data);
      navigate("/")
      // Handle the response (e.g., store the token, redirect, etc.)
      setError(null); // Clear any previous errors
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.msg || 'An error occurred'); // Display error message to user
      if (err.code === 'ERR_NETWORK') {
        setError('Network Error: Please ensure the backend server is running and accessible.');
      }
    }
  };

  return (

    <>
    <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="container mt-5">
      <div className="auth-wrapper">
        <h2>{isLogin ? 'Login' : 'Signup'}</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={!isLogin}
              />
            </div>
          )}
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            {isLogin ? 'Login' : 'Signup'}
          </button>
        </form>
        <button
          className="btn btn-link mt-3"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Don't have an account? Signup" : 'Already have an account? Login'}
        </button>
      </div>
    </div>
    <br/>
    <br/><br /><br /><br /><br /><br />
    <Footer/>
    </>
  );
};

export default Login;
