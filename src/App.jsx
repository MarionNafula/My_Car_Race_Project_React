import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Drivers from "./pages/ Drivers.jsx"; 
import Circuits from "./pages/Circuits.jsx";
import Stats from "./pages/Stats.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/circuits" element={<Circuits />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;