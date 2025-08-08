import Button from "./reuseable/Button";

const Hero = () => {
  return (
    <div
      className="hero w-full min-h-[100vh] text-center text-white flex items-center justify-center flex-col"
    >
      <h1 className="text-[3.5rem] max-w-[60vw] font-bold">We Ensure better education for a better world</h1>
      <p className="max-w-[50vw] font-small-bold mb-[1rem]">
        Our cutting-edge curriculum is designed to empower students with the
        knowledge, skills, and experiences needed to excel in the dynamic field
        of education
      </p>
      <Button text="Explore more"/>
    </div>
  );
};

export default Hero;
