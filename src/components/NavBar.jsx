import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu-icon.png";

import NavLinks from "./reuseable/NavLinks";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Menu toggled:", !isMenuOpen);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
      className={` ${
        sticky ? "bg-emerald" : ""
      } fixed w-full z-10 md:py-2 p-4 text-[#fff]  flex items-center justify-between md:justify-around`}
    >
      <div className=" md:w-[180px] w-[160px]">
        <img src={logo} alt="logo" className="w-full" />
      </div>

      <NavLinks func={"hidden md:flex"} />
      <div className="md:hidden w-8 relative">
        <img
          src={menu}
          onClick={toggleMenu}
          alt="menu"
          className="w-full object-cover"
        />
        {isMenuOpen && (
          <NavLinks
            func={`flex flex-col w-[10rem] gap-4 min-h-screen bg-emerald  absolute top-10 -right-4  p-4 rounded-md shadow-lg`}
          />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
