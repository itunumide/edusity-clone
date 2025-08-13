import Heading from "./reuseable/Heading";
import msgIcon from "../assets/msg-icon.png";
import mailIcon from "../assets/mail-icon.png";
import phoneIcon from "../assets/phone-icon.png";
import locationIcon from "../assets/location-icon.png";
import Form from "./Form";

const Contact = () => {
  return (
    <div id="contact" className="w-full min-h-[100vh] text-grey flex gap-20 md:gap-0 pt-24 mb-8 items-center justify-around flex-col">
      <Heading p={"CONTACT US"} h2={"Get in Touch"} text="text-center" />
      <div className="flex w-[70vw] md:gap-10 gap-16 flex-wrap ">
        <div className="flex flex-col gap-4 flex-1  ">
          <h3 className="flex items-center gap-3 text-[1.5rem] font-medium text-darkGray">
            Send us a message{" "}
            <img src={msgIcon} alt="message icon" className="w-10" />
          </h3>
          <p className="w-[98%]">
            We’re here to answer your questions, guide your journey, and provide
            the information you need to make the best decision for your future.
          </p>
          <p className="flex items-center gap-3 ">
            <img className="w-7" src={mailIcon} alt="mail icon" />
            hello@educity.edu
          </p>
          <p className="flex items-center gap-3 ">
            <img className="w-7" src={phoneIcon} alt="phone icon" />
            +1-555-789-2345
          </p>
          <p className="flex items-center gap-3 w-72 ">
            <img className="w-7" src={locationIcon} alt="location icon" />
            25 University Plaza, Cambridge, MA 02139, United States
          </p>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
