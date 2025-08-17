import Heading from "./reuseable/Heading";
import aboutimage from "../assets/about.jpg";
import playicon from "../assets/play-icon.png";
import { Element } from "react-scroll";
import VideoPlayer from "./VideoPlayer";
import { useState } from "react";

const About = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <Element name="about">
      <div className="min-h-[100vh] w-full py-[1rem] pt-24 md:pt-0 flex  justify-around items-center">
        <div className="md:w-[70vw] w-[80vw] flex  gap-[2rem]  flex-col-reverse md:flex-row">
          <div className=" md:flex-[.41] w-[76vw]  md:w-full mx-auto relative">
            <img
              src={aboutimage}
              alt="about image"
              className=" rounded-lg bg-cover bg-center h-full object-cover"
            />
            <div className="absolute inset-0 flex  justify-center items-center">
              {" "}
              <img
                src={playicon}
                alt="play icon"
                onClick={()=>{setPlayState(true)}}
                className=" w-[70px] cursor-pointer "
              />
            </div>
          </div>
          <div className="flex  gap-[.7rem] md:flex-[.59]  flex-col">
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
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </Element>
  );
};

export default About;
