import { useState } from "react";
import logo from "../assets/logo.png";
import Button from "./reuseable/Button";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  useState(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className={` ${sticky ? "bg-blue" : ""} fixed w-full z-10 py-2 text-[#fff] flex items-center justify-around`}>
      <div className=" w-[180px]">
        <img src={logo} alt="logo" className="w-full" />
      </div>
      <div className="flex gap-[2.5rem] items-center">
        <Link to="/">Home</Link>
        <Link to="/program">Program</Link>
        <Link to="/about">About Us</Link>
        <Link to="/campus">Campus</Link>
        <Link to="/testimonial">Testimonials</Link>
        <Button text="Contact us" bg={"bg-white"} />
      </div>
    </nav>
  );
};

export default NavBar;
