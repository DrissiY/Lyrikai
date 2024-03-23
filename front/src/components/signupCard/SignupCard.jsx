import React ,{useState, useRef} from 'react'
import './SignupCard.scss'

const SignupCard = () => {
    const [title, setTitle] = useState('Create your account very quickly ');
  const titleRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTitle(titleRef.current.value);
  };

  return (

        <div className="Signup-card">
    <form onSubmit={handleSubmit}>
      <div className='title'>
      <h3>{title}</h3>
      </div>
      <div className="form-group">
        <input type="Full name" id="name" placeholder='Full name'required />
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
      <label>Accept Conditions</label>
      </div>
    </div>
    <button className='submit'>Login</button>
    </form>
    <div className='createit'>
      <p>You already have an account ?</p>
      <a href='/'>Log in</a></div>

  </div>
  )
}

export default SignupCard