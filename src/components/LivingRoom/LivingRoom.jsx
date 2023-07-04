import React from 'react'
import '../Services.css'
import Carousel from "react-elastic-carousel";
import { FaLocationDot } from 'react-icons/fa6'
import { FaMobileAlt } from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'
import Image1 from '../../images/LivingRoom/display-1.jpg'
import Image2 from '../../images/LivingRoom/display-2.jpg'
import Image3 from '../../images/LivingRoom/modern-1.jpeg'
import Image4 from '../../images/LivingRoom/modern-2.jpg'
import Image5 from '../../images/LivingRoom/modern-3.jpeg'
import Image6 from '../../images/LivingRoom/modern-4.jpeg'
import Image7 from '../../images/LivingRoom/modern-5.jpg'
import Image8 from '../../images/LivingRoom/modern-6.jpg'
import Image9 from '../../images/LivingRoom/eclectic-1.jpg'
import Image10 from '../../images/LivingRoom/eclectic-2.jpg'
import Image11 from '../../images/LivingRoom/eclectic-3.jpeg'
import Image12 from '../../images/LivingRoom/eclectic-4.jpg'
import Image13 from '../../images/LivingRoom/eclectic-5.jpeg'
import Image14 from '../../images/LivingRoom/eclectic-6.jpg'
import Image15 from '../../images/LivingRoom/transitional-1.jpg'
import Image16 from '../../images/LivingRoom/transitional-2.jpg'
import Image17 from '../../images/LivingRoom/transitional-3.jpg'
import Image18 from '../../images/LivingRoom/transitional-4.jpg'
import Image19 from '../../images/LivingRoom/transitional-5.jpg'
import Image20 from '../../images/LivingRoom/transitional-6.png'
import Image21 from '../../images/LivingRoom/traditional-1.jpg'
import Image22 from '../../images/LivingRoom/traditional-2.jpeg'
import Image23 from '../../images/LivingRoom/traditional-3.jpg'
import Image24 from '../../images/LivingRoom/traditional-4.jpg'
import Image25 from '../../images/LivingRoom/traditional-5.jpg'
import Image26 from '../../images/LivingRoom/traditional-6.jpg'
import Image27 from '../../images/LivingRoom/industrial-1.jpg'
import Image28 from '../../images/LivingRoom/industrial-2.jpg'
import Image29 from '../../images/LivingRoom/industrial-3.jpg'
import Image30 from '../../images/LivingRoom/industrial-4.jpg'
import Image31 from '../../images/LivingRoom/industrial-5.jpeg'
import Image32 from '../../images/LivingRoom/industrial-6.jpg'
import Image33 from '../../images/logo.png'
import { Link } from 'react-router-dom';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];

const LivingRoom = () => {
  return (
    <>
      <div className="services-display">
        <img src={Image1} alt="living room display-1" />
        <img src={Image2} alt="living room display-2" />
        <div className="display-color"></div>
        <p>LIVING ROOM INTERIOR DESIGNERS</p>
      </div>
      <div className="type-name even-type-div">
        <div className="type-head-container even-type-head-container">
          <div className="type-container even-type-container">
            <div className="type-head even-type-head">Modern Design</div>
            <div className="type-subhead even-type-subhead">Modern Living rooms are designed to make them look more inviting and warm. The idea is to keep everything comfortable, yet stylish not to loose out the “modern” theme. The flooring is usually done in fabric with colours like brown or grey for an edgy feel. The upholstery and the furniture come in contrasting palettes for a better visual appeal.</div>
          </div>
        </div>
        <Carousel breakPoints={breakPoints}>
          <div className="item"><img src={Image3} alt="modern design-1" /></div>
          <div className="item"><img src={Image4} alt="modern design-2" /></div>
          <div className="item"><img src={Image6} alt="modern design-3" /></div>
          <div className="item"><img src={Image7} alt="modern design-4" /></div>
          <div className="item"><img src={Image8} alt="modern design-5" /></div>
          <div className="item"><img src={Image5} alt="modern design-6" /></div>
        </Carousel>
      </div>
      <div className="type-name">
        <div className="type-head-container">
          <div className="type-container">
            <div className="type-head">Eclectic Design</div>
            <div className="type-subhead">Add a quirky touch to your home by choosing this eclectic living room. It is loaded with vibrant colours and furnishings that can get a little overwhelming at first sight. However, you can avoid tackiness by carefully choosing the right blend of colours and fabrics to create a visually appealing room, minus the clutter. One easy way to achieve this concept is to repeat a few bold colours, surrounded by a neutral backdrop.</div>
          </div>
        </div>
        <Carousel breakPoints={breakPoints}>
          <div className="item"><img src={Image9} alt="eclectic design-1" /></div>
          <div className="item"><img src={Image10} alt="eclectic design-2" /></div>
          <div className="item"><img src={Image11} alt="eclectic design-3" /></div>
          <div className="item"><img src={Image12} alt="eclectic design-4" /></div>
          <div className="item"><img src={Image13} alt="eclectic design-5" /></div>
          <div className="item"><img src={Image14} alt="eclectic design-6" /></div>
        </Carousel>
      </div>
      <div className="type-name even-type-div">
        <div className="type-head-container even-type-head-container">
          <div className="type-container even-type-container">
            <div className="type-head even-type-head">Transitional Design</div>
            <div className="type-subhead even-type-subhead">Transitional living room designs are all about keeping it chic, modern and very contemporary. The concept of this style is to stay neutral and clean. So you must pick the colours wisely and combine darker shades like browns with lighter tones like tan, grey and white to add the right depth to the room. Add more textures to space and pay attention to the geometry of the furniture. A mix of boxy and curvy furnishings offers the right balance to the area.</div>
          </div>
        </div>
        <Carousel breakPoints={breakPoints}>
          <div className="item"><img src={Image16} alt="transitional design-2" /></div>
          <div className="item"><img src={Image18} alt="transitional design-4" /></div>
          <div className="item"><img src={Image19} alt="transitional design-5" /></div>
          <div className="item"><img src={Image17} alt="transitional design-3" /></div>
          <div className="item"><img src={Image20} alt="transitional design-6" /></div>
          <div className="item"><img src={Image15} alt="transitional design-1" /></div>
        </Carousel>
      </div>
      <div className="type-name">
        <div className="type-head-container">
          <div className="type-container">
            <div className="type-head">Traditional Design</div>
            <div className="type-subhead">Warmth and elegance- the words that come to our mind upon seeing this picture of a traditional living room. The tastefully done interiors reflect the old-world charm. You can notice the symmetrical arrangement of the furniture, which is very typical of this style.</div>
          </div>
        </div>
        <Carousel breakPoints={breakPoints}>
          <div className="item"><img src={Image21} alt="traditional design-1" /></div>
          <div className="item"><img src={Image22} alt="traditional design-2" /></div>
          <div className="item"><img src={Image24} alt="traditional design-4" /></div>
          <div className="item"><img src={Image26} alt="traditional design-6" /></div>
          <div className="item"><img src={Image25} alt="traditional design-5" /></div>
          <div className="item"><img src={Image23} alt="traditional design-3" /></div>
        </Carousel>
      </div>
      <div className="type-name even-type-div">
        <div className="type-head-container even-type-head-container">
          <div className="type-container even-type-container">
            <div className="type-head even-type-head">Industrial Design</div>
            <div className="type-subhead even-type-subhead">Industrial living rooms are perhaps the only designs that involve nothing but your creativity. You can notice exposed ceilings, bare flooring, grey and white colour schemes, along with a spacious room. Fancy furnishings make way for shabby rugs and coarsely done iron decors. Light fixtures are vital in these spaces to bring in the right visibility and lightened up environment.</div>
          </div>
        </div>
        <Carousel breakPoints={breakPoints}>
          <div className="item"><img src={Image27} alt="industrial design-1" /></div>
          <div className="item"><img src={Image28} alt="industrial design-2" /></div>
          <div className="item"><img src={Image29} alt="industrial design-3" /></div>
          <div className="item"><img src={Image30} alt="industrial design-4" /></div>
          <div className="item"><img src={Image32} alt="industrial design-6" /></div>
          <div className="item"><img src={Image31} alt="industrial design-5" /></div>
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
            <img src={Image33} alt="logo" /></div>
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

export default LivingRoom
