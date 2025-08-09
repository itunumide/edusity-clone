import Heading from "./reuseable/Heading";
import prevArrow from "../assets/back-icon.png";
import nextArrow from "../assets/next-icon.png";
import user1 from '../assets/user-1.png'
import user2 from '../assets/user-2.png'
import user3 from '../assets/user-3.png'
import user4 from '../assets/user-4.png'

const Testimonials = () => {
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
      name: "Emily Williams",
      school: "Edusity, USA",
      testimony:
        "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
      image: user4,
      name: "William Jackson",
      school: "Edusity, USA",
      testimony:
        "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
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
    <div className="w-full min-h-[90vh] text-grey flex  items-center justify-around flex-col">
      <Heading p={"TESTIMONIALS"} h2={"What Student Says"} />
      <div className="flex items-center justify-between  w-[80vw] ">
        <div className="w-[50px] h-[50px] flex items-center justify-center  rounded-[50%] bg-blue">
          <img src={prevArrow} alt=" prev arrow" className="w-5 " />
        </div>
        <div className="flex flex-wrap flex-[.9]  gap-[2rem]">
          {studentsTestimonials.map((student, index) => (
            <div key={index} className=" max-w-[20vw]">
              <div className="flex items-center">
                <div className="w-[60px]">
                  <img src={student.image} alt="profile image" className="w-full"/>
                </div>
                <div>
                  <h3>{student.name}</h3>
                  <p>{student.school}</p>
                </div>
              </div>
              <p>{student.testimony}</p>
            </div>
          ))}
        </div>
        <div className="w-[50px] h-[50px] flex items-center justify-center  rounded-[50%] bg-blue">
          <img src={nextArrow} alt="next arrow" className="w-5 " />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
