import { useState } from "react";
import logo from "../assets/logo.png";
import Button from "./reuseable/Button";

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
        <a href="#">Home</a>
        <a href="">Program</a>
        <a href="">About Us</a>
        <a href="">Campus</a>
        <a href="">Testimonials</a>
        <Button text="Contact us" bg={"bg-white"} />
      </div>
    </nav>
  );
};

export default NavBar;
