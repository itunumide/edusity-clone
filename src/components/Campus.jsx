import Heading from "./reuseable/Heading"
import ImageCard from "./reuseable/ImageCard"
import gallery1 from '../assets/gallery-1.png'
import gallery2 from '../assets/gallery-2.png'
import gallery3 from '../assets/gallery-3.png'
import gallery4 from '../assets/gallery-4.png'
import Button from "./reuseable/Button"


const Campus = () => {
  return (
    <div className="min-h-[90vh] w-full py-[1rem] gap-20 mt-10 mb-20 md:my-1 md:gap-1 flex flex-col text-center justify-around items-center">
      <Heading p={"GALLERY"} h2={"Campus Photos"}/>
      <div className=" grid md:gap-8 gap-y-8 gap-x-4 w-[90vw] md:w-[70vw] grid-cols-2 md:grid-cols-4 ">
        <ImageCard image1={gallery1}/>
         <ImageCard image1={gallery2}/>
          <ImageCard image1={gallery3}/>
          <ImageCard image1={gallery4}/>
      </div>
      <Button text={"View More Moments"} image color={"text-white"}/>
    </div>
  )
}

export default Campus
