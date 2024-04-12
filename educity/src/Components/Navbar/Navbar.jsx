import React, { useState, useEffect } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  
},[])
  
  return(
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} className="logo" />
      <ul>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="program" smooth={true} offset={0} duration={500}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={0} duration={500}>About us</Link></li>
        <li><Link to="campus" smooth={true} offset={0} duration={500}>Campus</Link></li>
        <li><Link to="testimonials" smooth={true} offset={0} duration={500}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} offset={0} duration={500} className='btn'>Contact us</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar