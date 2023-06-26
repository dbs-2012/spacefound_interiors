import './App.css';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Residential from './components/ResidentialInterior/Residential';
import LivingRoom from './components/LivingRoom/LivingRoom';


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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
