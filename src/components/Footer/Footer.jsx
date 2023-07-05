import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { FaMobileAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Typewriter } from 'react-simple-typewriter'
import '../Services.css'
import Logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="services-typewriter">
                <div className="services-best">WE ARE THE "
                    <span>
                        <Typewriter
                            words={['BEST RESIDENTIAL INTERIOR DESIGNERS IN BANGALORE', 'BEST SPACE SAVING INTERIOR DESIGNERS IN BANGALORE']}
                            loop={false}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span> "
                </div>
            </div>
            <div className="services-footer">
                <div className="services-footer-info">
                    <div className="services-logo-image">
                        <img src={Logo} alt="logo" /></div>
                    <p>Spacefound Interiors is an independent interior design consultancy and one-stop interior design solution with years of professional experience on projects for residential and commercial interior designs and decorators.</p>
                </div>
                <div className="services-services">
                    <div className="services-services-head"><h3>SERVICES</h3></div>
                    <p>
                        <ul>
                            <li><Link to="/spacefound_interiors/residential">Residential Interior</Link></li>
                            <li><Link to="/spacefound_interiors/living-room">Living Room Interior</Link></li>
                            <li><Link to="/spacefound_interiors/kitchen">Kitchen Interior</Link></li>
                            <li><Link to="/spacefound_interiors/bathroom">Bathroom Interior</Link></li>
                            <li><Link to="/spacefound_interiors/balcony">Balcony Decor</Link></li>
                        </ul>
                    </p>
                </div>
                <div className="services-contact-us">
                    <div className="services-contact-head"><h3>CONTACT US</h3></div>
                    <div className="services-contacts">
                        <FaLocationDot className='services-address' />
                        <p>Address: 64/2, TNT Cresent, Thanisandra Main Tech Park, Above ICICI Bank, Bangalore, Karnataka 560077</p>
                    </div>
                    <div className="services-contacts">
                        <FaMobileAlt className='services-phone' />
                        <p>Mobile: +91 9353301503</p>
                    </div>
                    <div className="services-contacts">
                        <MdEmail className='services-email' />
                        <p>Email: oasissyed59@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
