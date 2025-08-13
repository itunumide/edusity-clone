import { useState } from "react";
import Button from "./reuseable/Button";
import Input from "./reuseable/Input";

const Form = () => {
  const [result, setResult] =useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9efa6b21-29fb-4ea0-886b-192a7aa71489");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <form onSubmit={onSubmit} className="w-full text-grey flex flex-col gap-3">
      <Input
        id={"name"}
        type={"text"}
        placeholder={"Enter your name"}
        label={"Your Name"}
      />
      <Input
        id={"phoneNumber"}
        type={"text"}
        placeholder={"Enter your mobile number"}
        label={"Phone number"}
      />
      <Input
        id={"email"}
        type={"email"}
        placeholder={"Enter Your email id"}
        label={"Your Email"}
      />
      <div className="flex flex-col gap-1">
        <label htmlFor="message">Write your messages here</label>
        <textarea
          name="message"
          id="message"
          placeholder="Enter your message"
          rows={4}
          className="focus:outline-none bg-[#ebecfe] p-3 text-inherit"
        ></textarea>
      </div>
      <Button text="Submit now" image color="text-white" type="submit" />
       <span className=" block">{result}</span>
    </form>
  );
};

export default Form;
