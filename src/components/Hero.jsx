import Button from "./reuseable/Button";

const Hero = () => {
  return (
    <div
      id="hero"
      className="hero w-full min-h-[100vh] text-center text-white flex items-center justify-center flex-col"
    >
      <h1 className="text-[3.7rem] max-w-[60vw] font-bold leading-tight">
        Empowering Minds, Shaping the Future
      </h1>
      <p className="max-w-[50vw] font-small-bold my-[1rem]">
        Our innovative programs prepare learners with the skills, vision, and
        confidence to make a lasting impact in the world of education.
      </p>
      <Button text="Discover More" image dark bg={"bg-white"} />
    </div>
  );
};

export default Hero;
