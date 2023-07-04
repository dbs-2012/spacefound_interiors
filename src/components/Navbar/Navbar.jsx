import React, {useState} from 'react'
import './Navbar.css'
import { AiFillCaretDown } from 'react-icons/ai'
import Logo from '../../images/logo.png'
import { Link } from "react-router-dom";
import { VscThreeBars } from 'react-icons/vsc'

const Navbar = () => {

    const [displaydropdown, setDisplaydropdown] = useState(false);
    const [style, setStyle] = useState(false)

    const changeStyle = () => {
        setStyle(!style);
        setDisplaydropdown(!displaydropdown);
    }

    return (
        <div className='nav'>
            <div className='logo'>
                <img src={Logo} alt="" id='logo-image' />
                <Link to="/spacefound_interiors">
                    <span>SPACEFOUND INTERIORS</span>
                </Link>
            </div>
            <div className="others">
                <ul>
                    <li><Link to="/spacefound_interiors">Home</Link></li>
                    <li><Link to="/spacefound_interiors/gallery">Gallery</Link></li>
                    <li><a href="#about">About</a></li>
                    <li><div class="nav-dropdown">
                        <button type='button' className="nav-dropbtn" onClick={() => setDisplaydropdown(!displaydropdown)}>Services
                            <span className='arrow'><AiFillCaretDown /></span>
                        </button>
                        {displaydropdown &&
                        <div class="nav-dropdown-content">
                            <button onClick={() => setDisplaydropdown(!displaydropdown)}><Link to="/spacefound_interiors/residential">Residential Interior</Link></button>
                            <button onClick={() => setDisplaydropdown(!displaydropdown)}><Link to="/spacefound_interiors/living-room">Living Room Interior</Link></button>
                            <button onClick={() => setDisplaydropdown(!displaydropdown)}><Link to="/spacefound_interiors/kitchen">Kitchen Interior</Link></button>
                            <button onClick={() => setDisplaydropdown(!displaydropdown)}><Link to="/spacefound_interiors/bathroom">Bathroom Interior</Link></button>
                            <button onClick={() => setDisplaydropdown(!displaydropdown)}><Link to="/spacefound_interiors/balcony">Balcony Decor</Link></button>
                        </div>}
                    </div></li>
                    <li><Link to="/spacefound_interiors/contact-us">Contact Us</Link></li>
                </ul>
            </div>
            {style &&
            <div className="others-display-list">
                <ul>
                    <li><button onClick={() => setStyle(!style)}><Link to="/spacefound_interiors">Home</Link></button></li>
                    <li><button onClick={() => setStyle(!style)}><Link to="/spacefound_interiors/gallery">Gallery</Link></button></li>
                    <li><button onClick={() => setStyle(!style)}><a href="#about">About</a></button></li>
                    <li><button><div class="nav-dropdown">
                        <button type='button' className="nav-dropbtn" onClick={() => setDisplaydropdown(!displaydropdown)}>Services
                            <span className='arrow'><AiFillCaretDown /></span>
                        </button>
                        {displaydropdown &&
                        <div class="nav-dropdown-content">
                            <button onClick={changeStyle}><Link to="/spacefound_interiors/residential">Residential Interior</Link></button>
                            <button onClick={changeStyle}><Link to="/spacefound_interiors/living-room">Living Room Interior</Link></button>
                            <button onClick={changeStyle}><Link to="/spacefound_interiors/kitchen">Kitchen Interior</Link></button>
                            <button onClick={changeStyle}><Link to="/spacefound_interiors/bathroom">Bathroom Interior</Link></button>
                            <button onClick={changeStyle}><Link to="/spacefound_interiors/balcony">Balcony Decor</Link></button>
                        </div>}
                    </div></button></li>
                    <li><button onClick={() => setStyle(!style)}><Link to="/spacefound_interiors/contact-us">Contact Us</Link></button></li>
                </ul>
            </div>}
            <button type='button' id='checkbars' className="nav-bars" onClick={() => setStyle(!style)}><VscThreeBars /></button>
        </div>
    )
}

export default Navbar
