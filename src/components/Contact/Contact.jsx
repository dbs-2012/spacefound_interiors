import React from 'react'
import './Contact.css'
import Image1 from '../../images/Contact/display-1.jpg'
import Image2 from '../../images/Contact/display-2.jpg'
import Footer from '../Footer/Footer'

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
            <Footer />
        </>
    )
}

export default Contact
