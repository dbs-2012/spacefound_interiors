import React from 'react'
import '../Services.css'
import Carousel from "react-elastic-carousel";
import Image1 from '../../images/Kitchen/display-1.jpg'
import Image2 from '../../images/Kitchen/display-2.jpg'
import Image3 from '../../images/Kitchen/ushaped-1.jpg'
import Image4 from '../../images/Kitchen/ushaped-2.jpg'
import Image5 from '../../images/Kitchen/ushaped-3.jpg'
import Image6 from '../../images/Kitchen/ushaped-4.jpg'
import Image7 from '../../images/Kitchen/ushaped-5.jpg'
import Image8 from '../../images/Kitchen/ushaped-6.jpeg'
import Image9 from '../../images/Kitchen/island-1.jpg'
import Image10 from '../../images/Kitchen/island-2.jpg'
import Image11 from '../../images/Kitchen/island-3.jpg'
import Image12 from '../../images/Kitchen/island-4.jpg'
import Image13 from '../../images/Kitchen/island-5.jpg'
import Image14 from '../../images/Kitchen/island-6.jpg'
import Image15 from '../../images/Kitchen/lshaped-1.jpeg'
import Image16 from '../../images/Kitchen/lshaped-2.png'
import Image17 from '../../images/Kitchen/lshaped-3.jpg'
import Image18 from '../../images/Kitchen/lshaped-4.jpg'
import Image19 from '../../images/Kitchen/lshaped-5.jpg'
import Image20 from '../../images/Kitchen/lshaped-6.jpg'
import Image21 from '../../images/Kitchen/parallel-1.jpg'
import Image22 from '../../images/Kitchen/parallel-2.jpg'
import Image23 from '../../images/Kitchen/parallel-3.jpeg'
import Image24 from '../../images/Kitchen/parallel-4.jpeg'
import Image25 from '../../images/Kitchen/parallel-5.jpg'
import Image26 from '../../images/Kitchen/parallel-6.jpg'
import Image27 from '../../images/Kitchen/straight-1.jpg'
import Image28 from '../../images/Kitchen/straight-2.jpg'
import Image29 from '../../images/Kitchen/straight-3.jpg'
import Image30 from '../../images/Kitchen/straight-4.jpg'
import Image31 from '../../images/Kitchen/straight-5.jpg'
import Image32 from '../../images/Kitchen/straight-6.jpg'
import Footer from '../Footer/Footer';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
];

const Kitchen = () => {
    return (
        <>
            <div className="services-display">
                <img src={Image1} alt="living-room" />
                <img src={Image2} alt="living-room" />
                <div className="display-color"></div>
                <p>KITCHEN INTERIOR DESIGNERS</p>
            </div>
            <div className="type-name">
                <div className="type-head-container">
                    <div className="type-container">
                        <div className="type-head">U - Shaped Layout</div>
                        <div className="type-subhead">U-shaped kitchen ideas are efficient three-sided designs that max out kitchen storage possibilities with everything close to hand. If space is tight, these horseshoe-shaped layouts offer plenty of kitchen countertop space, cabinets and drawers above and below for an ultra-streamlined look. </div>
                    </div>
                </div>
                <Carousel breakPoints={breakPoints}>
                    <div className="item"><img src={Image8} alt="U-shaped layout-1" /></div>
                    <div className="item"><img src={Image6} alt="U-shaped layout-2" /></div>
                    <div className="item"><img src={Image7} alt="U-shaped layout-3" /></div>
                    <div className="item"><img src={Image3} alt="U-shaped layout-4" /></div>
                    <div className="item"><img src={Image4} alt="U-shaped layout-5" /></div>
                    <div className="item"><img src={Image5} alt="U-shaped layout-6" /></div>
                </Carousel>
            </div>
            <div className="type-name even-type-div">
                <div className="type-head-container even-type-head-container">
                    <div className="type-container even-type-container">
                        <div className="type-head even-type-head">Island Layout</div>
                        <div className="type-subhead even-type-subhead">The best kitchen island ideas can enhance your kitchen space immensely, be it through adding storage or creating a relaxed dining or seating area. The island will naturally become the heart of the kitchen, allowing for a flow that will make both cooking and socialising a real pleasure. You can choose to incorporate integral kitchen features into your island, such as a hob or a sink; keep it the reserve of storage with drawers or open shelving; or use it primarily as a central breakfast bar.</div>
                    </div>
                </div>
                <Carousel breakPoints={breakPoints}>
                    <div className="item"><img src={Image9} alt="island layout-1" /></div>
                    <div className="item"><img src={Image10} alt="island layout-2" /></div>
                    <div className="item"><img src={Image11} alt="island layout-3" /></div>
                    <div className="item"><img src={Image12} alt="island layout-4" /></div>
                    <div className="item"><img src={Image13} alt="island layout-5" /></div>
                    <div className="item"><img src={Image14} alt="island layout-6" /></div>
                </Carousel>
            </div>
            <div className="type-name">
                <div className="type-head-container">
                    <div className="type-container">
                        <div className="type-head">L - Shaped Layout</div>
                        <div className="type-subhead">L-shaped kitchen ideas work beautifully whether a space is a small, medium or large. From an aesthetic viewpoint, small L-shaped kitchens can be made to seem larger by opting for pale or neutral-colored cabinetry, which gives an impression of space.</div>
                    </div>
                </div>
                <Carousel breakPoints={breakPoints}>
                    <div className="item"><img src={Image15} alt="l-shaped layout-6" /></div>
                    <div className="item"><img src={Image17} alt="l-shaped layout-2" /></div>
                    <div className="item"><img src={Image16} alt="l-shaped layout-1" /></div>
                    <div className="item"><img src={Image20} alt="l-shaped layout-5" /></div>
                    <div className="item"><img src={Image18} alt="l-shaped layout-3" /></div>
                    <div className="item"><img src={Image19} alt="l-shaped layout-4" /></div>
                </Carousel>
            </div>
            <div className="type-name even-type-div">
                <div className="type-head-container even-type-head-container">
                    <div className="type-container even-type-container">
                        <div className="type-head even-type-head">Parallel Layout</div>
                        <div className="type-subhead even-type-subhead">Isn’t it better to have two kitchen counters than one? And that too, on either side. It is an advantage for those who seek countertop space for doing kitchen chores. With two platforms standing parallel to each other, you get to divide your work likewise. Such a layout allows free movement and makes cooking a delight.</div>
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
                        <div className="type-head">One - Wall Layout</div>
                        <div className="type-subhead">One-wall kitchen ideas are often considered the best kitchen layout for small or narrow kitchens. This simplest of all the layout options, a one-wall kitchen aims to maximize space efficiency without giving up on functionality. This design usually consists of cabinetry installed on a single wall. You can incorporate upper and low-level cabinets or shelving over base cabinets, resulting in a clean, linear aesthetic.</div>
                    </div>
                </div>
                <Carousel breakPoints={breakPoints}>
                    <div className="item"><img src={Image27} alt="one-wall layout-1" /></div>
                    <div className="item"><img src={Image28} alt="one-wall layout-2" /></div>
                    <div className="item"><img src={Image30} alt="one-wall layout-4" /></div>
                    <div className="item"><img src={Image31} alt="one-wall layout-5" /></div>
                    <div className="item"><img src={Image32} alt="one-wall layout-6" /></div>
                    <div className="item"><img src={Image29} alt="one-wall layout-3" /></div>
                </Carousel>
            </div>
            <Footer />
        </>
    )
}

export default Kitchen
