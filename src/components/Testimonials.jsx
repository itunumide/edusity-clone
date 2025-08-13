import Heading from "./reuseable/Heading";
import prevArrow from "../assets/back-icon.png";
import nextArrow from "../assets/next-icon.png";
import user1 from "../assets/user-1.png";
import user2 from "../assets/user-2.png";
import user3 from "../assets/user-3.png";
import user4 from "../assets/user-4.png";
import { useRef } from "react";

const Testimonials = () => {
  const slider = useRef();
  let translateX = 0;
  const slideForward = () => {
    if (translateX > -50) {
      translateX -= 16.7;
    }
    slider.current.style.transform = `translateX(${translateX}%)`;
  };
  const slideBackward = () => {
    if (translateX < 0) {
      translateX += 16.7;
     
      
    }
    slider.current.style.transform = `translateX(${translateX}%)`;
  };

  let studentsTestimonials = [
    {
      image: user1,
      name: "Emily Williams",
      school: "Edusity, USA",
      testimony:
        "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
      image: user2,
      name: "William Jackson",
      school: "Edusity, USA",
      testimony:
        "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
      image: user3,
      name: "Emily Carter",
      school: "Edusity, USA",
      testimony:
        "Studying here has been a life-changing experience. The resources, supportive faculty, and welcoming environment pushed me to aim higher than I ever thought possible.",
    },
    {
      image: user4,
      name: "Daniel Brooks",
      school: "Edusity, USA",
      testimony:
        "The program challenged me academically while also giving me real-world skills. I left with not just a degree, but a clear sense of purpose."},
    {
      image: user1,
      name: "Emily Williams",
      school: "Edusity, USA",
      testimony:
        "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
      image: user2,
      name: "William Jackson",
      school: "Edusity, USA",
      testimony:
        "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
  ];

  return (
    <div
      id="testimonial"
      className="w-full min-h-[90vh] text-grey flex mb-20 md:mb-1 items-center justify-around flex-col"
    >
      <Heading p={"TESTIMONIALS"} h2={"What Student Says"} text="text-center" />
      <div className="flex items-center justify-between relative w-[93vw] md:w-[80vw] px-12 md:px-20">
        <div className="w-[45px] md:w-[50px] p-[15px] absolute top-1/2 cursor-pointer translate-y-[-50%] left-0 right-auto rounded-[50%] bg-blue">
          <img
            src={prevArrow}
            alt=" prev arrow"
            className="w-5 "
            onClick={slideBackward}
          />
        </div>
        <div className="w-[45px] md:w-[50px] p-[15px] absolute top-1/2 cursor-pointer translate-y-[-50%] right-0 rounded-[50%] bg-blue">
          <img
            src={nextArrow}
            alt="next arrow"
            className="w-5 "
            onClick={slideForward}
          />
        </div>
        <div className="overflow-hidden ">
          <div
            className="flex overflow-x-hidden w-[600%] md:w-[300%] p-4 transition-all gap-8"
            ref={slider}
          >
            {studentsTestimonials.map((student, index) => (
              <div
                key={index}
                className=" rounded-lg p-10 w-1/2 flex flex-col gap-4  shadow-lg"
              >
                <div className="flex items-center gap-3 ">
                  <div className="w-[65px] border-[4px] rounded-[50%] border-blue">
                    <img
                      src={student.image}
                      alt="profile image"
                      className="w-full rounded-[50%] bg-cover bg-center"
                    />
                  </div>
                  <div>
                    <h3 className="text-blue font-semibold text-lg leading-tight">
                      {student.name}
                    </h3>
                    <p>{student.school}</p>
                  </div>
                </div>
                <p>{student.testimony}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
