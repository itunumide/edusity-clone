import { useState } from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu-icon.png";
import Button from "./reuseable/Button";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  useState(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
      className={` ${
        sticky ? "bg-blue" : ""
      } fixed w-full z-10 md:py-2 p-4 text-[#fff]  flex items-center justify-between md:justify-around`}
    >
      <div className=" md:w-[180px] w-[160px]">
        <img src={logo} alt="logo" className="w-full" />
      </div>
      <div className="md:flex gap-[2.5rem] hidden  items-center">
        <a href="#">Home</a>
        <a href="">Program</a>
        <a href="">About Us</a>
        <a href="">Campus</a>
        <a href="">Testimonials</a>
        <Button text="Contact us" bg={"bg-white"} />
      </div>
      <div className=" w-8 md:hidden">
        <img src={menu} alt="menu" className="w-full object-cover" />
      </div>
    </nav>
  );
};

export default NavBar;
