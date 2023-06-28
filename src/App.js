import './App.css';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Residential from './components/ResidentialInterior/Residential';
import LivingRoom from './components/LivingRoom/LivingRoom';
import Kitchen from './components/Kitchen/Kitchen';
import Bathroom from './components/Bathroom/Bathroom';
import Balcony from './components/Balcony/Balcony';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/living-room" element={<LivingRoom />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/bathroom" element={<Bathroom />} />
          <Route path="/balcony" element={<Balcony />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
