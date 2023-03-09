import React from 'react'
import CTA from"./Cta"
import ME from "../assets/me.png"
import HeaderSocials from './HeaderSocials'
import "./Header.css"
import himg from "../assets/headerimg3.jpg"


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Joel Cinus</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA/>
        
      </div>
    </header>
  )
}

export default Header