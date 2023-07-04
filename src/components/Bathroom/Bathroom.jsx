import React from 'react'
import '../Services.css'
import Carousel from "react-elastic-carousel";
import { FaLocationDot } from 'react-icons/fa6'
import { FaMobileAlt } from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'
import Image1 from '../../images/Bathroom/display-1.jpg'
import Image2 from '../../images/Bathroom/display-2.jpeg'
import Image3 from '../../images/Bathroom/full-1.jpg'
import Image4 from '../../images/Bathroom/full-2.jpeg'
import Image5 from '../../images/Bathroom/full-3.jpg'
import Image6 from '../../images/Bathroom/full-4.jpg'
import Image7 from '../../images/Bathroom/full-5.jpg'
import Image8 from '../../images/Bathroom/full-6.jpeg'
import Image9 from '../../images/Bathroom/three-1.jpg'
import Image10 from '../../images/Bathroom/three-2.jpg'
import Image11 from '../../images/Bathroom/three-3.jpeg'
import Image12 from '../../images/Bathroom/three-4.jpg'
import Image13 from '../../images/Bathroom/three-5.jpg'
import Image14 from '../../images/Bathroom/three-6.jpg'
import Image15 from '../../images/Bathroom/half-1.jpg'
import Image16 from '../../images/Bathroom/half-2.jpg'
import Image17 from '../../images/Bathroom/half-3.png'
import Image18 from '../../images/Bathroom/half-4.jpg'
import Image19 from '../../images/Bathroom/half-5.jpeg'
import Image20 from '../../images/Bathroom/half-6.jpg'
import Image21 from '../../images/logo.png'
import { Link } from 'react-router-dom';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
];

const Bathroom = () => {
    return (
        <>
            <div className="services-display">
                <img src={Image1} alt="bathroom display-1" />
                <img src={Image2} alt="bathroom display-2" />
                <div className="display-color"></div>
                <p>BATHROOM INTERIOR DESIGNERS</p>
            </div>
            <div className="type-name even-type-div">
                <div className="type-head-container even-type-head-container">
                    <div className="type-container even-type-container">
                        <div className="type-head even-type-head">Full Bathroom</div>
                        <div className="type-subhead even-type-subhead">Full bathrooms have a toilet, sink, shower, and bathtub/shower combination or a separate bathtub and shower. Most homes will have at least one full bathroom. A full bathroom is versatile and valuable, packing many functions into a relatively small space. It is common for low- to mid-priced two-bedroom homes to have one full bathroom.</div>
                    </div>
                </div>
                <Carousel breakPoints={breakPoints}>
                    <div className="item"><img src={Image3} alt="full bathroom-1" /></div>
                    <div className="item"><img src={Image6} alt="full bathroom-2" /></div>
                    <div className="item"><img src={Image7} alt="full bathroom-3" /></div>
                    <div className="item"><img src={Image8} alt="full bathroom-4" /></div>
                    <div className="item"><img src={Image5} alt="full bathroom-5" /></div>
                    <div className="item"><img src={Image4} alt="full bathroom-6" /></div>
                </Carousel>
            </div>
            <div className="type-name">
                <div className="type-head-container">
                    <div className="type-container">
                        <div className="type-head">Three - Quarter Bathroom</div>
                        <div className="type-subhead">Three-quarter bathrooms have a toilet, sink, and either a separate shower or a separate bathtub. As more bathrooms are being built and remodeled without bathtubs, this third component tends to be a shower.</div>
                    </div>
                </div>
                <Carousel breakPoints={breakPoints}>
                    <div className="item"><img src={Image9} alt="three-quarter bathroom-1" /></div>
                    <div className="item"><img src={Image10} alt="three-quarter bathroom-2" /></div>
                    <div className="item"><img src={Image11} alt="three-quarter bathroom-3" /></div>
                    <div className="item"><img src={Image12} alt="three-quarter bathroom-4" /></div>
                    <div className="item"><img src={Image13} alt="three-quarter bathroom-5" /></div>
                    <div className="item"><img src={Image14} alt="three-quarter bathroom-6" /></div>
                </Carousel>
            </div>
            <div className="type-name even-type-div">
                <div className="type-head-container even-type-head-container">
                    <div className="type-container even-type-container">
                        <div className="type-head even-type-head">Half Bathroom</div>
                        <div className="type-subhead even-type-subhead">Half bathrooms have a toilet and a sink. Half-bathrooms are called powder rooms or guest bathrooms. Half-baths allow more privacy for the homeowner, as visitors can use the toilet and wash up without entering the bedroom areas. Also, since full bathrooms tend to be more personal spaces with garments and medicines, visitors never need to see those items.</div>
                    </div>
                </div>
                <Carousel breakPoints={breakPoints}>
                    <div className="item"><img src={Image16} alt="transitional design-2" /></div>
                    <div className="item"><img src={Image18} alt="transitional design-4" /></div>
                    <div className="item"><img src={Image19} alt="transitional design-5" /></div>
                    <div className="item"><img src={Image15} alt="transitional design-1" /></div>
                    <div className="item"><img src={Image17} alt="transitional design-3" /></div>
                    <div className="item"><img src={Image20} alt="transitional design-6" /></div>
                </Carousel>
            </div>
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
                        <img src={Image21} alt="logo" /></div>
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
                </div>
            </div>
        </>
    )
}

export default Bathroom
