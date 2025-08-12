import Heading from "./reuseable/Heading"
import ImageCard from "./reuseable/ImageCard"
import gallery1 from '../assets/gallery-1.png'
import gallery2 from '../assets/gallery-2.png'
import gallery3 from '../assets/gallery-3.png'
import gallery4 from '../assets/gallery-4.png'
import Button from "./reuseable/Button"


const Campus = () => {
  return (
    <div className="min-h-[90vh] w-full py-[1rem] flex flex-col text-center justify-around items-center">
      <Heading p={"GALLERY"} h2={"Campus Photos"}/>
      <div className=" flex gap-[2rem] w-[70vw] ">
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
