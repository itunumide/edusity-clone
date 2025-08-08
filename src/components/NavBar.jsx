import logo from "../assets/logo.png";
import Button from "./reuseable/Button";

const NavBar = () => {
  return (
    <nav className="  fixed w-full z-2 py-[1rem] text-[#fff] flex items-center justify-around">
      <div className=" w-[180px]">
        <img src={logo} alt="logo" className="w-full" />
      </div>
      <div className="flex gap-[2.5rem] items-center">
        <a href="">Home</a>
        <a href="">Program</a>
        <a href="">About Us</a>
        <a href="">Campus</a>
        <a href="">Testimonials</a>
        <Button text="Contact us" bg={"bg-white"}/>
      </div>
    </nav>
  );
};

export default NavBar;
