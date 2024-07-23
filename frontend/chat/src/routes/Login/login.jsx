import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(userName, password);
  };

  return (
    <section className="main">
      <div className="login-page">
        <h1>Log In</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input">
            <h3>Username</h3>
            <input 
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)} 
            />
          </div>
          <div className="input">
            <h3>Password</h3>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <div className="btns">
            <button className="btn" type="submit" disabled={loading}>
              {loading ? 'Loading...' : 'Login'}
            </button>
            <p>Didn't have account?</p>
            <Link to='/signup'><button className="btn">Sign Up</button></Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
