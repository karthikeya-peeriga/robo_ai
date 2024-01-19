import React from 'react'
import logo from "../../assets/logo_navbar.png"
import "./Navbar.css"
import logoImage from "../../assets/logo_navbar.png"


const Navbar = () => {
  return (
    <nav className='navbar'>
       <img src={logoImage} alt="Logo" className="logo" />
       
       <div className="nav-links">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">Contact Us</a>
        <button className="action-button">Enroll Now</button>
        
      </div>
    </nav>

  );
  };
  

export default Navbar