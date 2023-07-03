import React from 'react'
import '../Services.css'
import Carousel from "react-elastic-carousel";
import { FaLocationDot } from 'react-icons/fa6'
import { FaMobileAlt } from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'
import Image1 from '../../images/Balcony/display-1.jpg'
import Image2 from '../../images/Balcony/display-2.jpg'
import Image3 from '../../images/Balcony/green-1.jpg'
import Image4 from '../../images/Balcony/green-2.jpg'
import Image5 from '../../images/Balcony/green-3.jpg'
import Image6 from '../../images/Balcony/green-4.jpg'
import Image7 from '../../images/Balcony/green-5.jpg'
import Image8 from '../../images/Balcony/green-6.jpg'
import Image9 from '../../images/Balcony/modern-1.jpg'
import Image10 from '../../images/Balcony/modern-2.jpeg'
import Image11 from '../../images/Balcony/modern-3.jpg'
import Image12 from '../../images/Balcony/modern-4.jpeg'
import Image13 from '../../images/Balcony/modern-5.jpg'
import Image14 from '../../images/Balcony/modern-6.jpeg'
import Image15 from '../../images/Balcony/swing-1.jpg'
import Image16 from '../../images/Balcony/swing-2.jpg'
import Image17 from '../../images/Balcony/swing-3.jpg'
import Image18 from '../../images/Balcony/swing-4.jpg'
import Image19 from '../../images/Balcony/swing-5.jpg'
import Image20 from '../../images/Balcony/swing-6.jpg'
import Image21 from '../../images/Balcony/wooden-1.jpg'
import Image22 from '../../images/Balcony/wooden-2.jpg'
import Image23 from '../../images/Balcony/wooden-3.jpeg'
import Image24 from '../../images/Balcony/wooden-4.jpg'
import Image25 from '../../images/Balcony/wooden-5.jpg'
import Image26 from '../../images/Balcony/wooden-6.jpg'
import Image27 from '../../images/logo.png'
import { Link } from 'react-router-dom';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
];

const Balcony = () => {
    return (
        <>
            <div className="services-display">
                <img src={Image1} alt="living-room" />
                <img src={Image2} alt="living-room" />
                <div className="display-color"></div>
                <p>BALCONY DESIGNERS</p>
            </div>
            <div className="type-name">
                <div className="type-head-container">
                    <div className="type-container">
                        <div className="type-head">Go Green!</div>
                        <div className="type-subhead">If you are looking for casual and chic apartment balcony ideas, add a grass mat and some benches made of reclaimed wood. Wall and railing planters will add to the look while keeping the vibe minimal. We’re sure the ambience of this balcony decoration idea is perfect to enjoy a cup of tea or grab a drink!</div>
                    </div>
                </div>
                <Carousel breakPoints={breakPoints}>
                    <div className="item"><img src={Image8} alt="go green layout-1" /></div>
                    <div className="item"><img src={Image5} alt="go green layout-6" /></div>
                    <div className="item"><img src={Image7} alt="go green layout-3" /></div>
                    <div className="item"><img src={Image3} alt="go green layout-4" /></div>
                    <div className="item"><img src={Image4} alt="go green layout-5" /></div>
                    <div className="item"><img src={Image6} alt="go green layout-2" /></div>
                </Carousel>
            </div>
            <div className="type-name even-type-div">
                <div className="type-head-container even-type-head-container">
                    <div className="type-container even-type-container">
                        <div className="type-head even-type-head">The Modern Vibes</div>
                        <div className="type-subhead even-type-subhead">If you are looking for something more exotic and enriching with a great vibe, then this is the perfect match for you. Such a theme helps to keep your balcony simple yet makes it look rich and spacious.</div>
                    </div>
                </div>
                <Carousel breakPoints={breakPoints}>
                    <div className="item"><img src={Image9} alt="modern layout-1" /></div>
                    <div className="item"><img src={Image10} alt="modern layout-2" /></div>
                    <div className="item"><img src={Image11} alt="modern layout-3" /></div>
                    <div className="item"><img src={Image14} alt="modern layout-6" /></div>
                    <div className="item"><img src={Image13} alt="modern layout-5" /></div>
                    <div className="item"><img src={Image12} alt="modern layout-4" /></div>
                </Carousel>
            </div>
            <div className="type-name">
                <div className="type-head-container">
                    <div className="type-container">
                        <div className="type-head">Let's Swing It!</div>
                        <div className="type-subhead">Having a swing as part of your small balcony design can help you relive your happy childhood memories. A great balcony idea for small spaces is to use a wide swing, wooden rafters across the ceiling, interesting tiles on one side of the railing and a coffee table just for essentials.</div>
                    </div>
                </div>
                <Carousel breakPoints={breakPoints}>
                    <div className="item"><img src={Image15} alt="swing layout-6" /></div>
                    <div className="item"><img src={Image16} alt="swing layout-1" /></div>
                    <div className="item"><img src={Image17} alt="swing layout-2" /></div>
                    <div className="item"><img src={Image20} alt="swing layout-5" /></div>
                    <div className="item"><img src={Image18} alt="swing layout-3" /></div>
                    <div className="item"><img src={Image19} alt="swing layout-4" /></div>
                </Carousel>
            </div>
            <div className="type-name even-type-div">
                <div className="type-head-container even-type-head-container">
                    <div className="type-container even-type-container">
                        <div className="type-head even-type-head">Wooden Touch</div>
                        <div className="type-subhead even-type-subhead">Take your pick from these amazing balcony design ideas. The rattan furniture and pockets of green create a warm and inviting look, while being eco-friendly. In contrast, the toned-down look may appeal to those who love a stark balcony decoration. A stunning view of the city, cutting chai, comfortable rattan furniture – this is something you can look forward to every morning and evening!</div>
                    </div>
                </div>
                <Carousel breakPoints={breakPoints}>
                    <div className="item"><img src={Image23} alt="art moderne design-1" /></div>
                    <div className="item"><img src={Image25} alt="art moderne design-2" /></div>
                    <div className="item"><img src={Image26} alt="art moderne design-3" /></div>
                    <div className="item"><img src={Image24} alt="art moderne design-4" /></div>
                    <div className="item"><img src={Image21} alt="art moderne design-5" /></div>
                    <div className="item"><img src={Image22} alt="art moderne design-6" /></div>
                </Carousel>
            </div>
            <div className="services-typewriter">
                <div className="services-best">WE ARE THE "
                    <span>
                        <Typewriter
                            words={['BEST RESIDENTIAL INTERIOR DESIGNERS IN BANGALORE', 'BEST SPACE SAVING INTERIOR DESIGNERS IN BANGALORE', 'BEST HOME OFFICE INTERIOR DESIGNERS IN BANGALORE']}
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
                        <img src={Image27} alt="logo" /></div>
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

export default Balcony
