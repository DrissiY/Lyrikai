import React from 'react'
import NavBar from '../../components/nav-bar/NavBar'
import "./landing.scss"
import circles from "../../assets/Circles.png"
import LoginCard from '../../components/LoginCard/LoginCard'
import chat from "../../assets/chat.png"



const Landing = () => {
  return (
    <div className=''>
        <NavBar />
        <div className='container'>
        <div className='landing-container'>
<div className='left'>
<div className='circles'>
<img src={circles} alt="" />
</div>
<h1> AI-Generated Lyrics Inspired by Your Favorite Artist</h1>
<div className='img-title'>
<img src={chat} alt="" />
</div>
</div>
<div className='right'>
<LoginCard/>
</div>
        </div>
        </div>

    </div>
  )
}

export default Landing