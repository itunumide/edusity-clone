import About from "./components/About";
import Campus from "./components/Campus";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Program from "./components/Program";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div>
      <NavBar />
       <Hero />
       <Program />
       <About/>
       <Campus />
       <Testimonials />
    </div>
  );
};

export default App;
