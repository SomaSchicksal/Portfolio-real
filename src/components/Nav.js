import React, {useState} from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {GoPerson} from "react-icons/go"
import {CgWebsite} from "react-icons/cg"
import {BiMessage} from "react-icons/bi"
import "./Nav.css"

const Nav = () => {
  const [activeNav, setActiveNav]=useState("#")
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><GoPerson/></a>
      
      <a href="#portfolio" onClick={()=>setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><CgWebsite/></a>
      <a href="#contact" onClick={()=>setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessage/></a>
    </nav>
  )
}

export default Nav