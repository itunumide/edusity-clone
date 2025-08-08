import Heading from "./reuseable/Heading"
import ImageCard from "./reuseable/ImageCard"
import program1 from '../assets/program-1.png'
import program2 from '../assets/program-2.png'
import program3 from '../assets/program-3.png'


const Program = () => {
  return (
    <div className="min-h-[90vh] w-full py-[2rem] flex flex-col text-center justify-around items-center">
      <Heading p={"OUR PROGRAM"} h2={"What We Offer"}/>
      <div className=" flex gap-[2rem] w-[70vw] ">
        <ImageCard image={program1}/>
         <ImageCard image={program2}/>
          <ImageCard image={program3}/>
      </div>
    </div>
  )
}

export default Program
