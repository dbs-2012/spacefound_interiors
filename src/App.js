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
          <Route path="/spacefound_interiors" element={<Home />} />
          <Route path="/spacefound_interiors/gallery" element={<Gallery />} />
          <Route path="/spacefound_interiors/residential" element={<Residential />} />
          <Route path="/spacefound_interiors/living-room" element={<LivingRoom />} />
          <Route path="/spacefound_interiors/kitchen" element={<Kitchen />} />
          <Route path="/spacefound_interiors/bathroom" element={<Bathroom />} />
          <Route path="/spacefound_interiors/balcony" element={<Balcony />} />
          <Route path="/spacefound_interiors/contact-us" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
