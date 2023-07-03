import React, {useState} from 'react'
import './Navbar.css'
import { AiFillCaretDown } from 'react-icons/ai'
import Logo from '../../images/logo.png'
import { Link } from "react-router-dom";
import { VscThreeBars } from 'react-icons/vsc'

const Navbar = () => {

    const [displaydropdown, setDisplaydropdown] = useState(false);
    const [style, setStyle] = useState(false)

    return (
        <div className='nav'>
            <div className='logo'>
                <img src={Logo} alt="" id='logo-image' />
                <Link to="/">
                    <span>SPACEFOUND INTERIORS</span>
                </Link>
            </div>
            <div className="others">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><a href="#about">About</a></li>
                    <li><div class="nav-dropdown">
                        <button type='button' className="nav-dropbtn" onClick={() => setDisplaydropdown(!displaydropdown)}>Services
                            <span className='arrow'><AiFillCaretDown /></span>
                        </button>
                        {displaydropdown &&
                        <div class="nav-dropdown-content">
                            <Link to="/residential">Residential Interior</Link>
                            <Link to="/living-room">Living Room Interior</Link>
                            <Link to="/kitchen">Kitchen Interior</Link>
                            <Link to="/bathroom">Bathroom Interior</Link>
                            <Link to="/balcony">Balcony Decor</Link>
                        </div>}
                    </div></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
            </div>
            {style &&
            <div className="others-display-list">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><a href="#about">About</a></li>
                    <li><div class="nav-dropdown">
                        <button type='button' className="nav-dropbtn" onClick={() => setDisplaydropdown(!displaydropdown)}>Services
                            <span className='arrow'><AiFillCaretDown /></span>
                        </button>
                        {displaydropdown &&
                        <div class="nav-dropdown-content">
                            <Link to="/residential">Residential Interior</Link>
                            <Link to="/living-room">Living Room Interior</Link>
                            <Link to="/kitchen">Kitchen Interior</Link>
                            <Link to="/bathroom">Bathroom Interior</Link>
                            <Link to="/balcony">Balcony Decor</Link>
                        </div>}
                    </div></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
            </div>}
            <button type='button' id='checkbars' className="nav-bars" onClick={() => setStyle(!style)}><VscThreeBars /></button>
        </div>
    )
}

export default Navbar
