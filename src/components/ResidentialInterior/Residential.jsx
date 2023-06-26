import React, { useState } from 'react'
import './Residential.css'
import Carousel from "react-elastic-carousel";
import { FaLocationDot } from 'react-icons/fa6'
import { FaMobileAlt } from 'react-icons/fa'
import TypeWriterEffect from "react-typewriter-effect"
import Image1 from '../../images/Residential/display-1.jpg'
import Image2 from '../../images/Residential/display-2.jpg'
import Image3 from '../../images/Residential/contemporary-1.jpg'
import Image4 from '../../images/Residential/contemporary-2.jpeg'
import Image5 from '../../images/Residential/contemporary-3.jpeg'
import Image6 from '../../images/Residential/contemporary-4.jpg'
import Image7 from '../../images/Residential/contemporary-5.jpg'
import Image8 from '../../images/Residential/contemporary-6.jpeg'
import Image9 from '../../images/Residential/minimalist-1.jpg'
import Image10 from '../../images/Residential/minimalist-2.jpg'
import Image11 from '../../images/Residential/minimalist-3.jpg'
import Image12 from '../../images/Residential/minimalist-4.jpeg'
import Image13 from '../../images/Residential/minimalist-5.jpg'
import Image14 from '../../images/Residential/minimalist-6.jpg'
import Image15 from '../../images/Residential/farmhouse-1.jpg'
import Image16 from '../../images/Residential/farmhouse-2.jpg'
import Image17 from '../../images/Residential/farmhouse-3.jpg'
import Image18 from '../../images/Residential/farmhouse-4.jpg'
import Image19 from '../../images/Residential/farmhouse-5.jpg'
import Image20 from '../../images/Residential/farmhouse-6.jpeg'
import Image21 from '../../images/Residential/art-1.jpg'
import Image22 from '../../images/Residential/art-2.jpg'
import Image23 from '../../images/Residential/art-3.jpeg'
import Image24 from '../../images/Residential/art-4.jpg'
import Image25 from '../../images/Residential/art-5.jpg'
import Image26 from '../../images/Residential/art-6.jpg'
import Image27 from '../../images/Residential/asian-1.jpeg'
import Image28 from '../../images/Residential/asian-2.jpg'
import Image29 from '../../images/Residential/asian-3.jpg'
import Image30 from '../../images/Residential/asian-4.jpeg'
import Image31 from '../../images/Residential/asian-5.jpg'
import Image32 from '../../images/Residential/asian-6.jpg'
import Image33 from '../../images/logo.png'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];

const Residential = () => {

  return (
    <>
      <div className="residential-display">
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <div className="display-color"></div>
        <p>RESIDENTIAL INTERIOR DESIGNERS</p>
      </div>
      <div className="contemporary">
        <div className="contemporary-head-container">
          <div className="contemporary-container">
            <div className="contemporary-head">Contemporary Interior Design</div>
            <div className="contemporary-subhead">Contemporary interior design is a type of interior design style which refers to trends that are ruling now- at this very moment. The contemporary interior design style is something that can be adjusted to every room in the house. Be that, bedroom, living room or even kitchen. </div>
          </div>
        </div>
        <Carousel breakPoints={breakPoints}>
          <div className="item"><img src={Image3} alt="" /></div>
          <div className="item"><img src={Image4} alt="" /></div>
          <div className="item"><img src={Image5} alt="" /></div>
          <div className="item"><img src={Image6} alt="" /></div>
          <div className="item"><img src={Image7} alt="" /></div>
          <div className="item"><img src={Image8} alt="" /></div>
        </Carousel>
      </div>
      <div className="minimalist">
        <div className="minimalist-head-container">
          <div className="minimalist-container">
            <div className="minimalist-head">Minimalist Interior Design</div>
            <div className="minimalist-subhead">Minimalist Interior Design style emphasizes minimalism in all aspects of interior design, from simple furnishing to neutral color palettes, to functional but not flamboyant accessories. Everything is streamlined, simple, and necessary. No excesses.  </div>
          </div>
        </div>
        <Carousel breakPoints={breakPoints}>
          <div className="item"><img src={Image11} alt="" /></div>
          <div className="item"><img src={Image12} alt="" /></div>
          <div className="item"><img src={Image13} alt="" /></div>
          <div className="item"><img src={Image14} alt="" /></div>
          <div className="item"><img src={Image9} alt="" /></div>
          <div className="item"><img src={Image10} alt="" /></div>
        </Carousel>
      </div>
      <div className="farmhouse">
        <div className="farmhouse-head-container">
          <div className="farmhouse-container">
            <div className="farmhouse-head">Farmhouse Interior Design</div>
            <div className="farmhouse-subhead">A farmhouse is rustic and allows us to unite with nature since it uses a lot of organic and natural materials and furniture designed accordingly. The Farmhouse Interior Design style uses these elements and creates a farmhouse-like vibe in a city home surrounded by concrete.</div>
          </div>
        </div>
        <Carousel breakPoints={breakPoints}>
          <div className="item"><img src={Image16} alt="" /></div>
          <div className="item"><img src={Image17} alt="" /></div>
          <div className="item"><img src={Image18} alt="" /></div>
          <div className="item"><img src={Image19} alt="" /></div>
          <div className="item"><img src={Image20} alt="" /></div>
          <div className="item"><img src={Image15} alt="" /></div>
        </Carousel>
      </div>
      <div className="art">
        <div className="art-head-container">
          <div className="art-container">
            <div className="art-head">Art Moderne Interior Design</div>
            <div className="art-subhead">Art Moderne Interior Design style is all about bigger, bolder, and brassier. Furniture is designed with a swelling curve and other decor items were either pared or stripped down. Designers also refer to this interior design style as the American Modern or Modernist.</div>
          </div>
        </div>
        <Carousel breakPoints={breakPoints}>
          <div className="item"><img src={Image23} alt="" /></div>
          <div className="item"><img src={Image25} alt="" /></div>
          <div className="item"><img src={Image26} alt="" /></div>
          <div className="item"><img src={Image24} alt="" /></div>
          <div className="item"><img src={Image21} alt="" /></div>
          <div className="item"><img src={Image22} alt="" /></div>
        </Carousel>
      </div>
      <div className="asian">
        <div className="asian-head-container">
          <div className="asian-container">
            <div className="asian-head">Asian Interior Design</div>
            <div className="asian-subhead">Asian Interior Design style innards design, occasionally called Oriental design, showcases the societies of Japan, China, Vietnam, Thailand and other prominent Eastern societies. Accessories continue this dramatic style by featuring beast motifs and mythological beasts, similar to monkeys and dragons.</div>
          </div>
        </div>
        <Carousel breakPoints={breakPoints}>
          <div className="item"><img src={Image27} alt="" /></div>
          <div className="item"><img src={Image28} alt="" /></div>
          <div className="item"><img src={Image29} alt="" /></div>
          <div className="item"><img src={Image30} alt="" /></div>
          <div className="item"><img src={Image31} alt="" /></div>
          <div className="item"><img src={Image32} alt="" /></div>
        </Carousel>
      </div>
      <div className="typewriter">
        <div className="best">WE ARE THE "
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
            <img src={Image33} alt="logo" /></div>
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

export default Residential
