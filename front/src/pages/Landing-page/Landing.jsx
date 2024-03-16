import React from 'react'
import NavBar from '../../components/nav-bar/NavBar'
import "./landing.scss"
import circles from "../../assets/Circles.png"
import LoginCard from '../../components/LoginCard/LoginCard'



const Landing = () => {
  return (
    <div className='landing-page'>
        <NavBar />
        <div className='landing-container'>
<div className='left'>
<h1> AI-Generated Lyrics Inspired by Your Favorite Artist</h1>
<div className='circles'>
<img src={circles} alt="" />
</div>
<div className="account">
  <p>Dont have an account ?</p>
  <a href="">Create it</a>
</div>
<div className='img-title'>
  <p><strong>Experience</strong> the magic of AI-crafted lyrics that capture the essence of your beloved artist's musical style. Our advanced AI model artfully generates lyrics, emulating the unique creative expression of the artist you adore, providing you with a fresh perspective on their artistry.</p>
</div>
</div>
<div className='right'>
<LoginCard/>
</div>
        </div>
    </div>
  )
}

export default Landing