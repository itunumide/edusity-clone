import { Link } from "react-scroll"
import Button from "./Button"


const NavLinks = ({func}) => {
  return (
    <div className={`${func} flex gap-[2.5rem]  items-center`}>
       <Link to="hero" smooth={true} duration={500}>Home</Link>
        <Link to="program" smooth={true} duration={500}>Program</Link>
        <Link to="about" smooth={true} duration={500}>About Us</Link>
        <Link to="campus" smooth={true} duration={500}>Campus</Link>
        <Link to="testimonials" smooth={true} duration={500}>Testimonials</Link>
        <Link to="contact" smooth={true} duration={500}><Button text="Contact us" bg={"bg-white"} /></Link>
      
    </div>
  )
}

export default NavLinks
