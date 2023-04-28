import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/arpit-kumar-singh-/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/ArpitKRS" target="_blank"><FaGithub /></a>
        <a href="https://twitter.com/_Arpit_2507" target="_blank"><FaTwitterSquare /></a>
    </div>
  )
}

export default HeaderSocials
