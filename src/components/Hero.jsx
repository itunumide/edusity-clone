import Button from "./reuseable/Button";

const Hero = () => {
  return (
    <div
      id="hero"
      className="hero w-full min-h-screen text-center px-10 md:px-0 text-white flex items-center justify-center flex-col"
    >
      <h1 className="md:text-[3.7rem] text-[2rem] md:max-w-[60vw] font-bold leading-tight">
        Empowering Minds, Shaping the Future
      </h1>
      <p className="md:max-w-[50vw] font-small-bold my-[1rem]">
        Our innovative programs prepare learners with the skills, vision, and
        confidence to make a lasting impact in the world of education.
      </p>
      <Button text="Discover More" image dark bg={"bg-white"} />
    </div>
  );
};

export default Hero;
