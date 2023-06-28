import React from 'react'
import './Home.css'
import { FaLocationDot } from 'react-icons/fa6'
import { FaMobileAlt } from 'react-icons/fa'
import TypeWriterEffect from "react-typewriter-effect"
import { Link } from "react-router-dom";
import Image1 from '../../images/Home/home-1.jpeg'
import Image2 from '../../images/Home/home-2.jpg'
import Image3 from '../../images/Home/home-3.jpg'
import Image4 from '../../images/Home/home-5.jpg'
import Image5 from '../../images/Home/home-4.jpg'
import Image6 from '../../images/Home/card-1.jpg'
import Image7 from '../../images/Home/card-2.jpeg'
import Image8 from '../../images/Home/card-3.jpg'
import Image9 from '../../images/Home/gallery-1.jpg'
import Image10 from '../../images/Home/gallery-2.jpg'
import Image11 from '../../images/Home/gallery-3.jpg'
import Image12 from '../../images/Home/gallery-4.jpg'
import Image13 from '../../images/Home/gallery-5.jpg'
import Image14 from '../../images/Home/gallery-6.jpg'
import Image15 from '../../images/Home/why.jpg'
import Image16 from '../../images/logo.png'

const Home = () => {
    return (
        <>
            <div id="slider">
                <figure>
                    <img src={Image1} alt='project' />
                    <img src={Image2} alt='project' />
                    <img src={Image3} alt='project' />
                    <img src={Image4} alt='project' />
                    <img src={Image5} alt='project' />
                </figure>

                <div className='text'>A home designed so elegantly, you'll love the space you find.</div>
                <div className="small-text">Transform your home or office space into an elegant and functional oasis with our expert interior design services. We tailor solutions to your preferences.</div>
                <Link to='/residential'><button className='btn'>Learn More</button></Link>
            </div>

            <div className="info">
                WHAT <span id='we'>WE</span> DO
            </div>

            <div className="home-cards">
                <div className="home-card">
                    <img src={Image6} alt="Residential" />
                    <div className='home-card-head'>
                        RESIDENTIAL <span>DESIGN</span>
                    </div>
                    <div className='home-card-info'>
                        <p>Spacefound Interiors' Residential Interior Design Portfolio Displays A Wide And Variable Range Of Actual Photos Of The Projects We Have Accomplished So Far.</p>
                    </div>
                </div>
                <div className="home-card">
                    <img src={Image7} alt="Commercial" />
                    <div className='home-card-head' id='second'>
                        SPACE <span>SAVING</span> DESIGN
                    </div>
                    <div className='home-card-info'>
                        <p>Commercial Interior Design Portfolio Consists Of Some Formal Interior Projects We Have Undertaken Throughout The Years Of Interior Design Experience We Possess.</p>
                    </div>
                </div>
                <div className="home-card">
                    <img src={Image8} alt="Office" />
                    <div className='home-card-head' id='third'>
                        OFFICE <span>DESIGN</span>
                    </div>
                    <div className='home-card-info'>
                        <p>Our Office Interior Design Portfolio Consists Of Some Of The Formal Interior Projects We Have Undertaken Throughout The Years Of Interior Design Experience We Possess.</p>
                    </div>
                </div>
            </div>

            <div className="display">
                <div className="dis">
                    <div className="disp">
                        <div className="display-head">Ideas for Inspiration</div>
                        <div className="display-subhead">Give your home a new look with these interior design ideas curated for you</div>
                    </div>
                </div>
                <div className="galleries">
                    <div className="gallery-1">
                        <Link to="/living-room"><img src={Image9} alt="Living Room" id='living-room' />
                        <div id="living-head"><p>Living Room</p></div></Link>
                    </div>
                    <div className="gallery-2">
                        <Link to="/bedroom"><img src={Image10} alt="Master Bedroom" id='master-bedroom' />
                        <div id="master-head"><p>Master Bedroom</p></div></Link>
                    </div>
                    <div className="gallery-3">
                        <Link to="/balcony"><img src={Image11} alt="Balcony" id='balcony' />
                        <div id="balcony-head"><p>Balcony</p></div></Link>
                    </div>
                    <div className="gallery-4">
                        <Link to="/bathroom"><img src={Image12} alt="Bathroom" id='bathroom' />
                        <div id="bathroom-head"><p>Bathroom</p></div></Link>
                    </div>
                    <div className="gallery-5">
                        <Link to="/kitchen"><img src={Image13} alt="Kitchen" id='kitchen' />
                        <div id="kitchen-head"><p>Kitchen</p></div></Link>
                    </div>
                    <div className="gallery-6">
                        <Link to="/residential"><img src={Image14} alt="Wardrobe" id='wardrobe' />
                        <div id="wardrobe-head"><p>Wardrobe</p></div></Link>
                    </div>
                </div>
            </div>

            <div className="choice-container">
                <div className="choice-head">WHY CHOOSE US</div>
                <div className="home-container">
                    <div className="circular-image">
                        <img src={Image15} alt="Architecture" id='why' />
                    </div>
                    <div className="rotate-image"></div>
                    <div className="light-background home-interior">
                        <h3>INTERIOR DESIGN</h3>
                        <p>Spacefound Interiors undertake revolutionary projects under our responsibility. From designing to execution, we offer end-to-end solutions and supervisions by providing you with a one-stop shop for all your interior needs.</p>
                    </div>
                    <div className="dark-background home-affordable">
                        <h3>AFFORDABLE PRICE</h3>
                        <p>At Spacefound Interiors, you will find top international brands with up-to-date knowledge of premium materials at very affordable prices.</p>
                    </div>
                    <div className="light-background home-guaranteed">
                        <h3>GUARANTEED WORKS</h3>
                        <p>The warranty which we provide is unconditional on all our artistry. A material guarantee is also subject to the terms and conditions of the company. However, we will try our best to assist you for the rest of your life.</p>
                    </div>
                    <div className="dark-background home-number">
                        <h3>'N' - Number OF DESIGNS</h3>
                        <p>We give you a wide variety of different options to select from as our moto is customer satisfaction. We shower you with 'n' number of designs, be it - Contemporary, Modern, Roman, Minimalist - anything you need.</p>
                    </div>
                    <div className="light-background home-consultation">
                        <h3>FREE CONSULTATION</h3>
                        <p>We understand your hesitation in contacting in an interior designer for your needs. But you need not worry as we will provide you with free consultation or quote.</p>
                    </div>
                    <div className="dark-background home-support">
                        <h3>24/7 SUPPORT</h3>
                        <p>Once you have chosen Spacefound Interiors, you just need to sit and relax as we will be there for you anytime, day or night. We even deliver after-sale services round the clock to cater to your needs.</p>
                    </div>
                </div>
            </div>

            <div className="home-typewriter">
                <div className="home-best">WE ARE THE "
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
                <Link to='/contact-us'><div className="home-contact"><button>Contact Us</button></div></Link>
            </div>
            <div className="home-footer">
                <div className="home-footer-info">
                    <div className="home-logo-image">
                        <img src={Image16} alt="logo" /></div>
                    <p>Spacefound Interiors is an independent interior design consultancy and one-stop interior design solution with years of professional experience on projects for residential and commercial interior designs and decorators.</p>
                </div>
                <div className="home-services">
                    <div className="home-services-head"><h3>SERVICES</h3></div>
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
                <div className="home-contact-us">
                    <div className="home-contact-head"><h3>CONTACT US</h3></div>
                    <div className="home-contacts">
                        <FaLocationDot className='home-address' />
                        <p>Address: 64/2, TNT Cresent, Thanisandra Main Tech Park, Above ICICI Bank, Bangalore, Karnataka 560077</p>
                    </div>
                    <div className="home-contacts">
                        <FaMobileAlt className='home-phone' />
                        <p>Mobile: +91 9353301503</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
