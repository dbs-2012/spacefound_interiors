import React from 'react'
import './Contact.css'
import { FaLocationDot } from 'react-icons/fa6'
import { FaMobileAlt } from 'react-icons/fa'
import TypeWriterEffect from "react-typewriter-effect"
import Image1 from '../../images/Contact/display-1.jpg'
import Image2 from '../../images/Contact/display-2.jpg'
import Image3 from '../../images/logo.png'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <>
            <div className="services-display">
                <img src={Image1} alt="living-room" />
                <img src={Image2} alt="living-room" />
                <div className="display-color"></div>
                <p>CONTACT US</p>
            </div>
            <div className="contact-form-container">
                <div className="consultant-form">
                    <form action="#">
                        <div className="form-head"><h3>Meet A Designer</h3></div>
                        <div className="name">
                            <input type="text" name="name" id="name" placeholder='Enter your name' />
                        </div>
                        <div className="email">
                            <input type="email" name="email" id="email" placeholder='Enter your email' />
                        </div>
                        <div className="tel">
                            <input type="tel" name="phone" id="phone" placeholder='Enter your mobile number' />
                        </div>
                        <div className="pincode">
                            <input type="text" name="pincode" id="pincode" placeholder='Enter your current residence pincode' />
                        </div>
                        <div className="submit">
                            <input type="submit" value="Book Now" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="services-typewriter">
                <div className="services-best">WE ARE THE "
                    <span>
                        <TypeWriterEffect
                            textStyle={{
                                fontFamily: 'Red Hat Display',
                                color: '#ECFDF1',
                                fontWeight: 700,
                                fontSize: '2rem',
                            }}
                            startDelay={1000}
                            cursorColor="#90ADC6"
                            multiText={[
                                'BEST RESIDENTIAL INTERIOR DESIGNERS IN BANGALORE',
                                'BEST SPACE SAVING INTERIOR DESIGNERS IN BANGALORE',
                                'BEST HOME OFFICE INTERIOR DESIGNERS IN BANGALORE',
                            ]}
                            multiTextDelay={1000}
                            typeSpeed={70}
                            multiTextLoop
                        />
                    </span> "
                </div>
                <div className="services-contact"><button>Contact Us</button></div>
            </div>
            <div className="services-footer">
                <div className="services-footer-info">
                    <div className="services-logo-image">
                        <img src={Image3} alt="logo" /></div>
                    <p>Spacefound Interiors is an independent interior design consultancy and one-stop interior design solution with years of professional experience on projects for residential and commercial interior designs and decorators.</p>
                </div>
                <div className="services-services">
                    <div className="services-services-head"><h3>SERVICES</h3></div>
                    <p>
                        <ul>
                            <li><Link to="/residential">Residential Interior</Link></li>
                            <li><Link to="/living-room">Living Room Interior</Link></li>
                            <li><Link to="/kitchen">Kitchen Interior</Link></li>
                            <li><Link to="/bathroom">Bathroom Interior</Link></li>
                            <li><Link to="/balcony">Balcony Decor</Link></li>
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
                </div>
            </div>
        </>
    )
}

export default Contact
