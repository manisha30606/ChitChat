import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';
import GenderCheckBox from './GenderCheckBox';
import useSignup from '../../hooks/useSignup';

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    userName: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const {loading,signup} = useSignup();
  
  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs)
   

  };

  return (
    <section className="main">
      <div className="login-page">
        <h1>Sign Up</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input">
            <h3>Name</h3>
            <input
              type="text"
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>
          <div className="input">
            <h3>Username</h3>
            <input
              type="text"
              value={inputs.userName}
              onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
            />
          </div>
          <div className="input">
            <h3>Password</h3>
            <input
              type="password"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>
          <div className="input">
            <h3>Confirm Password</h3>
            <input
              type="password"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>
          <GenderCheckBox
            onCheckBoxChange={handleCheckBoxChange}
            selectedGender={inputs.gender}
          />
          <div className="btns">
            <button type="submit" className="btn" disabled = {loading}>Sign Up</button>
            <p>Already have an account?</p>
            <Link to="/login">
              {loading ? <button type="button" className="btn">Log In</button> : "Sign Up" }
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
