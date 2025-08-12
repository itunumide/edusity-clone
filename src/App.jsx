import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Campus from "./components/Campus";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Program from "./components/Program";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/program" element={<Program />} />
        <Route path="/about" element={<About />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/testimonial" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
