import React, { useState, useRef } from 'react';
import "./LoginCard.scss";

const LoginCard = (
) => {
  const [title, setTitle] = useState('Welcome back ! 👋');
  const titleRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTitle(titleRef.current.value);
  };

  return (
    <div className="login-card">
      <form onSubmit={handleSubmit}>
        <div className='title'>
        <h3>{title}</h3>
        </div>
      <div className="form-group">
        <input type="email" id="email" placeholder='Email'required />
      </div>
      <div className="form-group">
        <input type="password" id="password" placeholder='Password' required />
      </div>
      <div className='remember-forget'>
        <div className='rememberme'>
        <input type="radio" name="rememberme" id="rememberme" />
        <label>Remember me</label>
        </div>
        <a href="#">forget ?</a>
      </div>
      <button className='submit'>Login</button>
      </form>
      <div className='createit'>
        <p>You don’t  have an account ?</p>
        <a>Create account</a></div>

    </div>
  );
};

export default LoginCard;
