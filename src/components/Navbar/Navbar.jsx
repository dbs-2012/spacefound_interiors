import React from 'react'
import './Navbar.css'
import { AiFillCaretDown } from 'react-icons/ai'
import Logo from '../../images/logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='logo'>
                <img src={Logo} alt="" id='logo-image' />
                <Link to="/">
                    <span>SPACEFOUND INTERIORS</span>
                </Link>
            </div>
            <div className="others">
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link>
                <a href="#about">About</a>
                <div class="nav-dropdown">
                    <button className="nav-dropbtn">Services
                        <span className='arrow'><AiFillCaretDown /></span>
                    </button>
                    <div class="nav-dropdown-content">
                        <Link to="/residential">Residential Interior</Link>
                        <Link to="/living-room">Living Room Interior</Link>
                        <a href="#">Kitchen Interior</a>
                        <a href="#">Bathroom Interior</a>
                        <a href="#">Balcony Decor</a>
                    </div>
                </div>
                <a href="#contact-us">Contact Us</a>
            </div>
        </div>
    )
}

export default Navbar
