import Heading from "./reuseable/Heading";
import msgIcon from "../assets/msg-icon.png";
import mailIcon from "../assets/mail-icon.png";
import phoneIcon from "../assets/phone-icon.png";
import locationIcon from "../assets/location-icon.png";
import Form from "./Form";
import Button from "./reuseable/Button";

const Contact = () => {
  return (
    <div className="w-full min-h-[110vh] text-grey flex  items-center justify-around flex-col">
      <Heading p={"CONTACT US"} h2={"Get in Touch"} />
      <div className="flex w-[70vw] gap-10 ">
        <div className="flex flex-col gap-4 flex-1  ">
          <h3 className="flex items-center gap-3 text-[1.5rem] font-medium text-darkGray">
            Send us a message{" "}
            <img src={msgIcon} alt="message icon" className="w-10" />
          </h3>
          <p className="w-[98%]">
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <p className="flex items-center gap-3 ">
            <img className="w-7" src={mailIcon} alt="mail icon" />
            Contact@GreatStack.dev
          </p>
          <p className="flex items-center gap-3 ">
            <img className="w-7" src={phoneIcon} alt="phone icon" />
            +1 123-456-7890
          </p>
          <p className="flex items-center gap-3 w-72 ">
            <img className="w-7" src={locationIcon} alt="location icon" />
            77 Massachusetts Ave, Cambridge MA 02139, United States
          </p>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <Form />
          <Button text="Submit now" image color="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
