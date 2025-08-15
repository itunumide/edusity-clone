import Heading from "./reuseable/Heading";
import ImageCard from "./reuseable/ImageCard";
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";
import Button from "./reuseable/Button";
import { Element } from "react-scroll";

const Campus = () => {
  return (
    <Element name="campus">
      {" "}
      <div className="min-h-[100vh] w-full pt-[6rem] md:pt-[4rem] gap-20 mt-10 md:mt-1 md:gap-1 flex flex-col text-center justify-around items-center">
        <Heading p={"GALLERY"} h2={"Campus Photos"} />
        <div className=" grid md:gap-8 gap-y-8 gap-x-4 w-[90vw] md:w-[70vw] grid-cols-2 md:grid-cols-4 ">
          <ImageCard height={"h-[50vh] object-cover"} image1={gallery1} />
          <ImageCard height={"h-[50vh] object-cover"} image1={gallery2} />
          <ImageCard height={"h-[50vh] object-cover"} image1={gallery3} />
          <ImageCard height={"h-[50vh] object-cover"} image1={gallery4} />
        </div>
        <Button text={"View More Moments"} image color={"text-white"} />
      </div>
    </Element>
  );
};

export default Campus;
