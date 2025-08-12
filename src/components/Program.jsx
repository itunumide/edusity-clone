import Heading from "./reuseable/Heading"
import ImageCard from "./reuseable/ImageCard"
import program1 from '../assets/program-1.png'
import program2 from '../assets/program-2.png'
import program3 from '../assets/program-3.png'
import programIcon1 from '../assets/program-icon-1.png'
import programIcon2 from '../assets/program-icon-2.png'
import programIcon3 from '../assets/program-icon-3.png'


const Program = () => {
  return (
    <div id="program" className="min-h-[90vh] w-full py-[2rem] flex flex-col text-center justify-around items-center">
      <Heading p={"OUR PROGRAM"} h2={"What We Offer"}/>
      <div className=" flex gap-[2rem] w-[70vw] flex-wrap ">
        <ImageCard image1={program1} position={"relative"} text={"Graduation Degree"} image2={programIcon1}/>
         <ImageCard image1={program2} position={"relative"} text={"Master Degree"} image2={programIcon2}/>
          <ImageCard image1={program3} position={"relative"} text={"Post Graduation"} image2={programIcon3}/>
      </div>
    </div>
  )
}

export default Program
