import React from 'react'
import "./Signup.scss";
import SignupCard from '../../components/signupCard/SignupCard';





const Signup = () => {
  return (
    <div className='sign-up'>
<div className='signup-left'></div>
<div className='signup-right'>
<SignupCard></SignupCard>
</div>
    </div>
  )
}

export default Signup