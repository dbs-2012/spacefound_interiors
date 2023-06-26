import React from 'react'
import './Gallery.css'
import { PiNumberCircleOneBold } from "react-icons/pi";
import { PiNumberCircleTwoBold } from "react-icons/pi";
import { PiNumberCircleThreeBold } from "react-icons/pi";
import { PiNumberCircleFourBold } from "react-icons/pi";
import { PiNumberCircleFiveBold } from "react-icons/pi";
import { PiNumberCircleSixBold } from "react-icons/pi";
import { FaLocationDot } from 'react-icons/fa6'
import { FaMobileAlt } from 'react-icons/fa'
import TypeWriterEffect from "react-typewriter-effect"
import Image from '../../images/Gallery/bedroom.png'
import Image2 from '../../images/Gallery/living-room.png'
import Image3 from '../../images/Gallery/kitchen.png'
import Image4 from '../../images/Gallery/gallery-1.jpg'
import Image5 from '../../images/Gallery/gallery-2.jpg'
import Image6 from '../../images/Gallery/gallery-3.jpeg'
import Image7 from '../../images/Gallery/gallery-4.jpeg'
import Image8 from '../../images/Gallery/gallery-7.jpg'
import Image9 from '../../images/Gallery/vase-1.png'
import Image10 from '../../images/Gallery/vase-2.png'
import Image11 from '../../images/Gallery/bath.png'
import Image12 from '../../images/Gallery/dream-1.jpg'
import Image13 from '../../images/Gallery/dream-2.jpg'
import Image14 from '../../images/Gallery/dream-3.jpeg'
import Image15 from '../../images/Gallery/dream-4.jpg'
import Image16 from '../../images/Gallery/dream-5.jpeg'
import Image17 from '../../images/Gallery/dream-6.jpg'
import Image18 from '../../images/Gallery/consultation-1.png'
import Image19 from '../../images/Gallery/consultation-2.png'
import Image20 from '../../images/Gallery/step-1.png'
import Image21 from '../../images/Gallery/step-2.jpg'
import Image22 from '../../images/Gallery/step-3.jpg'
import Image23 from '../../images/Gallery/step-4.png'
import Image24 from '../../images/Gallery/step-5.png'
import Image25 from '../../images/Gallery/step-6.png'
import Image26 from '../../images/logo.png'

const Gallery = () => {
    return (
        <>
            <div className="gallery-container">
                <div className="display">
                    <div className="gallery-container-info">
                        <p>Design your home with passion.</p>
                    </div>
                    <div className="img-1">
                        <img src={Image} alt="" />
                    </div>
                    <div className="img-2">
                        <img src={Image2} alt="" />
                    </div>
                    <div className="img-3">
                        <img src={Image3} alt="" />
                    </div>
                    <div className="img-4">
                        <img src={Image11} alt="" />
                    </div>
                    <div className="outerRect">
                        <div className="innerRect">
                            <figure>
                                <img src={Image4} alt='Living Room' />
                                <img src={Image5} alt='Bedroom' />
                                <img src={Image6} alt='Kitchen' />
                                <img src={Image7} alt='Dining Area' />
                                <img src={Image8} alt='Bathroom' />
                            </figure>
                        </div>
                    </div>
                    <div className="vase-1">
                        <img src={Image9} alt="" />
                    </div>
                    <div className="vase-2">
                        <img src={Image10} alt="" />
                    </div>
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
            </div>

            <div className="gallery-pics-container">
                <div className="gallery-head">
                    <div className="gall-head">
                        Dream Gallery
                    </div>
                    <div className="gallery-subhead">
                        If you're searching for your dream home interior designs, then look no further as at Spacefound provide end-to-end interior design services
                    </div>
                </div>
                <div className="galleries">
                    <div className="gallery-1">
                        <a href="#">
                            <img src={Image12} alt="Living Room" id='living-room' />
                            <div id="living-head"><p>Living Room</p></div></a>
                    </div>
                    <div className="gallery-2">
                        <a href="">
                            <img src={Image13} alt="Kitchen" id='kitchen' />
                            <div id="kitchen-head"><p>Kitchen</p></div></a>
                    </div>
                    <div className="gallery-3">
                        <a href="">
                            <img src={Image14} alt="Master Bedroom" id='master' />
                            <div id="master-head"><p>Master Bedroom</p></div></a>
                    </div>
                    <div className="gallery-4">
                        <a href="">
                            <img src={Image15} alt="Bathroom" id='bathroom' />
                            <div id="bath-head"><p>Bathroom</p></div></a>
                    </div>
                    <div className="gallery-5">
                        <a href="">
                            <img src={Image16} alt="Home Office" id='office' />
                            <div id="office-head"><p>Home Office</p></div></a>
                    </div>
                    <div className="gallery-6">
                        <a href="">
                            <img src={Image17} alt="Space Saving Furniture" id='space' />
                            <div id="space-head"><p>Space Saving Furniture</p></div></a>
                    </div>
                </div>
            </div>

            <div className="gallery-consultation-container">
                <div className="gallery-consultation">
                    <div className="consultation-head">
                        <h3>Get a free design consultation for your dream home.</h3>
                    </div>
                    <div className="consultation" >
                        <div id="consultation-1">
                            <img src={Image18} alt="Visualization" />

                        </div>
                        <p>Visualise your dream home interiors in 3D at our studio nearby or virtually from anywhere.</p>
                    </div>
                    <div className="consultation">
                        <div id="consultation-2">
                            <img src={Image19} alt="Pricing" />

                        </div>
                        <p>Receive personalized quotes as per your requirements and floor plan.</p>
                    </div>
                    <div className="consultation-btn">
                        <a href=""><button>Book Now</button></a>
                    </div>
                </div>
            </div>

            <div className="gallery-steps-container">
                <div className="gallery-steps">
                    <div className="steps">
                        <div className="steps-image">
                            <img src={Image20} alt="" />
                        </div>
                        <div className="steps-text">
                            <PiNumberCircleOneBold className='numbers' />
                            <p>Book a free design session held at our studio or vurtually from home.</p>
                        </div>
                    </div>
                    <div className="steps">
                        <div className="steps-image">
                            <img src={Image21} alt="" />
                        </div>
                        <div className="steps-text">
                            <PiNumberCircleTwoBold className='numbers' />
                            <p>Meet with a designer and get a 3D walkthrough of your dream home.</p>
                        </div>
                    </div>
                    <div className="steps">
                        <div className="steps-image">
                            <img src={Image22} alt="" />
                        </div>
                        <div className="steps-text">
                            <PiNumberCircleThreeBold className='numbers' />
                            <p>Receive personalized quotes as per your requirements and floor plan.</p>
                        </div>
                    </div>
                    <div className="steps">
                        <div className="steps-image">
                            <img src={Image23} alt="" />
                        </div>
                        <div className="steps-text">
                            <PiNumberCircleFourBold className='numbers' />
                            <p>Make an initial payment to book the project, and initiate design.</p>
                        </div>
                    </div>
                    <div className="steps">
                        <div className="steps-image">
                            <img src={Image24} alt="" />
                        </div>
                        <div className="steps-text">
                            <PiNumberCircleFiveBold className='numbers' />
                            <p>Pay the balance amount once production is complete.</p>
                        </div>
                    </div>
                    <div className="steps">
                        <div className="steps-image">
                            <img src={Image25} alt="" />
                        </div>
                        <div className="steps-text">
                            <PiNumberCircleSixBold className='numbers' />
                            <p>Get your dream interiors delivered and installed within a few days only.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="gallery-typewriter">
                <div className="gallery-best">WE ARE THE "
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
                <div className="contact"><button>Contact Us</button></div>
            </div>
            <div className="footer">
                <div className="footer-info">
                    <div className="logo-image">
                        <img src={Image26} alt="logo" /></div>
                    <p>Spacefound Interiors is an independent interior design consultancy and one-stop interior design solution with years of professional experience on projects for residential and commercial interior designs and decorators.</p>
                </div>
                <div className="services">
                    <div className="services-head"><h3>SERVICES</h3></div>
                    <p>
                        <ul>
                            <li><a href="">Residential Interior</a></li>
                            <li><a href="">Commercial Interior</a></li>
                            <li><a href="">Office Interior</a></li>
                            <li><a href="">Living Room Interior</a></li>
                            <li><a href="">Kitchen Interior</a></li>
                            <li><a href="">Bathroom Interior</a></li>
                            <li><a href="">Balcony Decor</a></li>
                        </ul>
                    </p>
                </div>
                <div className="contact-us">
                    <div className="contact-head"><h3>CONTACT US</h3></div>
                    <div className="contacts">
                        <FaLocationDot className='address' />
                        <p>Address: 64/2, TNT Cresent, Thanisandra Main Tech Park, Above ICICI Bank, Bangalore, Karnataka 560077</p>
                    </div>
                    <div className="contacts">
                        <FaMobileAlt className='phone' />
                        <p>Mobile: +91 9353301503</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery
