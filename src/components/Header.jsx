import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GoMarkGithub } from 'react-icons/go';
import { SiWhatsapp } from 'react-icons/si';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';

import logo from './../assets/icons/8.png'

const Header = () => {
  return (
    <div className="header">
      <Link to="/"><img src={logo} alt="logo" height="100px" width="150px"/></Link>
      <nav>
        <ol>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About me</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          {/* <li>
            <NavLink to="/contact">Contact</NavLink>
          </li> */}
        </ol>
      </nav>
      <div className="contact">
        <a href="https://wa.me/373059044855" className="contact" rel="noopener noreferrer">
          <SiWhatsapp fill="#f7d708" size={24}/>
        </a>
        <a href="https://github.com/jose827corrza" className="contact" rel="noopener noreferrer">
          <GoMarkGithub fill="#f7d708" size={24}/>
        </a>
        <a href="https://twitter.com/jose827heavy" className="contact" rel="noopener noreferrer">
          <BsTwitter fill="#f7d708" size={24}/>
        </a>
        <a href="https://www.linkedin.com/in/jose-daniel-corredor/?locale=en_US" className="contact" rel="noopener noreferrer">
          <BsLinkedin fill="#f7d708" size={24}/>
        </a>
      </div>
    </div>
  );
};

export default Header;
