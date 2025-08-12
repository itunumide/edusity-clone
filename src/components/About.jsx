import Heading from "./reuseable/Heading";
import aboutimage from "../assets/about.png";
import playicon from "../assets/play-icon.png";

const About = () => {
  return (
    <div className="min-h-[90vh] w-full py-[1rem] flex  justify-around items-center">
      <div className="w-[70vw] flex  gap-[2rem] flex-wrap ">
        <div className=" flex-[.41] relative">
          <img
            src={aboutimage}
            alt="about image"
            className=" rounded-lg bg-cover bg-center"
          />
          <img
            src={playicon}
            alt="play icon"
            className="absolute w-[60px] cursor-pointer top-40 right-40"
          />
        </div>
        <div className="flex  gap-[.7rem] flex-[.59]  flex-col">
          <Heading
            p={"ABOUT UNIVERSITY"}
            h2={"Cultivating Tomorrow's Innovators"}
            text={"text-[1.125rem]"}
          />
          <p className="leading-tight text-grey ">
            Join a transformative learning journey where creativity meets
            academic excellence. Our curriculum blends cutting-edge knowledge
            with practical experience, ensuring you graduate ready to lead,
            inspire, and innovate.
          </p>
          <p className="leading-tight text-grey ">
            With a focus on innovation, hands-on learning, and personalized
            mentorship, our programs prepare aspiring educators to make a
            meaningful impact in classrooms, schools, and communities.
          </p>
          <p className="leading-tight text-grey ">
            Through experiential learning, dedicated guidance, and a diverse
            range of disciplines, we help you turn ambition into achievement.
            Whether your goal is to teach, manage, or pioneer new educational
            paths, we're here to help you get there.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
