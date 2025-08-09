import Input from "./reuseable/Input"


const Form = () => {
  return (
    <form className="w-full text-grey flex flex-col gap-2">
      <Input id={"name"} type={"text"} placeholder={"Enter your name"} label={"Your Name"}/>
      <Input id={"phone"} type={"text"} placeholder={"Enter your mobile number"} label={"Phone number"}/>
      <Input id={"email"} type={"email"} placeholder={"Enter Your email id"} label={"Your Email"}/>
      <div className="flex flex-col gap-1">
        <label htmlFor="message">Write your messages here</label>
        <textarea name="message" id="message" placeholder="Enter your message" rows={4} className="focus:outline-none bg-[#ebecfe] p-3 text-inherit"></textarea>
      </div>
    </form>
  )
}

export default Form
