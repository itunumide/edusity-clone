import logo from "../assets/logo.png";

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
        <button className="border-none rounded-3xl bg-white text-[#212121] py-[.6rem] w-[9rem]">Contact us</button>
      </div>
    </nav>
  );
};

export default NavBar;
