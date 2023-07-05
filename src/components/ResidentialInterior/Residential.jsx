import React from 'react'
import '../Services.css'
import Carousel from "react-elastic-carousel";
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
import Footer from '../Footer/Footer';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 562, itemsToShow: 2},
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];

const Residential = () => {

  return (
    <>
      <div className="services-display">
        <img src={Image1} alt="living-room" />
        <img src={Image2} alt="living-room" />
        <div className="display-color"></div>
        <p>RESIDENTIAL INTERIOR DESIGNERS</p>
      </div>
      <div className="type-name">
        <div className="type-head-container">
          <div className="type-container">
            <div className="type-head">Contemporary Design</div>
            <div className="type-subhead">Contemporary design is a type of interior design style which refers to trends that are ruling now- at this very moment. The contemporary interior design style is something that can be adjusted to every room in the house. Be that, bedroom, living room or even kitchen. </div>
          </div>
        </div>
        <Carousel breakPoints={breakPoints}>
          <div className="item"><img src={Image3} alt="contemporary design-1" /></div>
          <div className="item"><img src={Image4} alt="contemporary design-2" /></div>
          <div className="item"><img src={Image5} alt="contemporary design-3" /></div>
          <div className="item"><img src={Image6} alt="contemporary design-4" /></div>
          <div className="item"><img src={Image7} alt="contemporary design-5" /></div>
          <div className="item"><img src={Image8} alt="contemporary design-6" /></div>
        </Carousel>
      </div>
      <div className="type-name even-type-div">
        <div className="type-head-container even-type-head-container">
          <div className="type-container even-type-container">
            <div className="type-head even-type-head">Minimalist Design</div>
            <div className="type-subhead even-type-subhead">Minimalist Design style emphasizes minimalism in all aspects of interior design, from simple furnishing to neutral color palettes, to functional but not flamboyant accessories. Everything is streamlined, simple, and necessary. No excesses.  </div>
          </div>
        </div>
        <Carousel breakPoints={breakPoints}>
          <div className="item"><img src={Image11} alt="minimalist design-1" /></div>
          <div className="item"><img src={Image12} alt="minimalist design-2" /></div>
          <div className="item"><img src={Image13} alt="minimalist design-3" /></div>
          <div className="item"><img src={Image14} alt="minimalist design-4" /></div>
          <div className="item"><img src={Image9} alt="minimalist design-5" /></div>
          <div className="item"><img src={Image10} alt="minimalist design-6" /></div>
        </Carousel>
      </div>
      <div className="type-name">
        <div className="type-head-container">
          <div className="type-container">
            <div className="type-head">Farmhouse Design</div>
            <div className="type-subhead">A farmhouse is rustic and allows us to unite with nature since it uses a lot of organic and natural materials and furniture designed accordingly. The Farmhouse Design style uses these elements and creates a farmhouse-like vibe in a city home surrounded by concrete.</div>
          </div>
        </div>
        <Carousel breakPoints={breakPoints}>
          <div className="item"><img src={Image16} alt="farmhouse design-1" /></div>
          <div className="item"><img src={Image17} alt="farmhouse design-2" /></div>
          <div className="item"><img src={Image18} alt="farmhouse design-3" /></div>
          <div className="item"><img src={Image19} alt="farmhouse design-4" /></div>
          <div className="item"><img src={Image20} alt="farmhouse design-5" /></div>
          <div className="item"><img src={Image15} alt="farmhouse design-6" /></div>
        </Carousel>
      </div>
      <div className="type-name even-type-div">
        <div className="type-head-container even-type-head-container">
          <div className="type-container even-type-container">
            <div className="type-head even-type-head">Art Moderne Design</div>
            <div className="type-subhead even-type-subhead">Art Moderne Design style is all about bigger, bolder, and brassier. Furniture is designed with a swelling curve and other decor items were either pared or stripped down. Designers also refer to this interior design style as the American Modern or Modernist.</div>
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
      <div className="type-name">
        <div className="type-head-container">
          <div className="type-container">
            <div className="type-head">Asian Design</div>
            <div className="type-subhead">Asian Design style innards design, occasionally called Oriental design, showcases the societies of Japan, China, Vietnam, Thailand and other prominent Eastern societies. Accessories continue this dramatic style by featuring beast motifs and mythological beasts, similar to monkeys and dragons.</div>
          </div>
        </div>
        <Carousel breakPoints={breakPoints}>
          <div className="item"><img src={Image27} alt="asian design-1" /></div>
          <div className="item"><img src={Image28} alt="asian design-2" /></div>
          <div className="item"><img src={Image29} alt="asian design-3" /></div>
          <div className="item"><img src={Image30} alt="asian design-4" /></div>
          <div className="item"><img src={Image31} alt="asian design-5" /></div>
          <div className="item"><img src={Image32} alt="asian design-6" /></div>
        </Carousel>
      </div>
      <Footer />
    </>
  )
}

export default Residential
