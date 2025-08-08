import Heading from "./reuseable/Heading";
import aboutimage from "../assets/about.png";
import playicon from "../assets/play-icon.png";

const About = () => {
  return (
    <div className="min-h-[90vh] w-full py-[1rem] flex  justify-around items-center">
      <div className="w-[70vw] flex  gap-[2rem] ">
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
            h2={"Nurturing Tomorrow's Leaders Today"}
            text={"text-[1.125rem]"}
          />
          <p className="leading-tight text-grey ">
            Embark on a transformative educational journey with our university's
            comprehensive education programs. Our cutting-edge curriculum is
            designed to empower students with the knowledge, skills, and
            experiences needed to excel in the dynamic field of education.
          </p>
          <p className="leading-tight text-grey ">
            With a focus on innovation, hands-on learning, and personalized
            mentorship, our programs prepare aspiring educators to make a
            meaningful impact in classrooms, schools, and communities.
          </p>
          <p className="leading-tight text-grey ">
            Whether you aspire to become a teacher, administrator, counselor, or
            educational leader, our diverse range of programs offers the perfect
            pathway to achieve your goals and unlock your full potential in
            shaping the future of education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
