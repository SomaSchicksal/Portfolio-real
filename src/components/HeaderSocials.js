import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithubAlt} from "react-icons/fa"



const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="linkedin" target="_blank"><BsLinkedin/></a>
        <a href="github" target="_blank"><FaGithubAlt/></a>
        <a href="" target="_blank"></a>
    </div>
  )
}

export default HeaderSocials