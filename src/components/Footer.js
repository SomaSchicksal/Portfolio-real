import React from 'react'
import {AiFillFacebook} from "react-icons/ai"
import {BsLinkedin} from "react-icons/bs"

import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo"></a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About me</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/gioele.cinus" target="_blank"><AiFillFacebook/></a>
        <a href="https://linkedin.com/in/gioele-cinus-0a8853265" target="_blank"><BsLinkedin></BsLinkedin></a>
      </div>
    </footer>
  )
}

export default Footer