import HeroSection from "../components/ui/heroSection"
import { CiVideoOn } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";
import ManLogo from '../assite/Man.png';
import chat from '../assite/chat.png';


const HomePage = () => {
    return (
        <div>
            <div className=" bg-white h-[400px] mt-4  md:mt-10 p-4 w-[95%]   md:w-[67%] m-auto rounded-md shadow-2xl flex items-center justify-center ">
                <div className="text-center">
                    <b><p className=" text-5xl  md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-7xl font-bold animate-fade-up animate-once animate-ease-linear"> Grow <big className=" text-red-500">youtube</big> <br /> <big className=" text-[#FF914D]">instagram</big> </p></b>
                    <p className=" text-2xl animate-fade-right animate-once animate-ease-in   mt-7 font-bold">With <b className="text-[#36bfff] " >CreatorsLens</b></p>
                </div>
            </div>

            <div className="  border-b-4 border-indigo-500 h-[200px] flex flex-col  items-center justify-center w-[95%]  md:w-[67%] m-auto mt-5 rounded">
                <b><p className="font-bold text-center md:text-start text-3xl md:2xl:text-3xl lg:text-4xl xl:text-4xl  2xl:text-4xl">CreatorsLens.com for Creators</p></b>
                <p className=" mt-6  text-lg flex-wrap text-gray-700 mb-3 flex items-center justify-start gap-2"><CiVideoOn size={ 25 } className=" animate-wiggle-more animate-infinite animate-ease-linear" color="red" /> Video Suggsetion  , <CiClock1 size={ 25 } className=" animate-wiggle-more animate-infinite animate-ease-linear" color="blue" /> timing Suggsetion , <MdAttachMoney size={ 25 } className=" animate-wiggle-more animate-infinite animate-ease-linear" color="green" /> Earn Suggsetion</p>
            </div>

            <div className=" flex justify-between flex-col lg:flex-row  w-[95%]   md:w-[67%] m-auto mt-5">
                <img src={ ManLogo } className=" object-cover animate-fade-right animate-once animate-ease-linear animate-normal md:h-[100%]     lg:h-[400px] " />
                <img src={ chat } className=" object-cover  animate-fade-left animate-once animate-ease-linear animate-normal md:h-[100%]     lg:h-[400px] " />
            </div>

            <div className=" flex mt-10 justify-center uppercase  lg:flex-row  w-[95%]    md:w-[67%] m-auto ">
                <b><p className="  text-4xl text-center md:text-start  ">We help based on <big className="  text-[#FF914D]">Data</big> </p></b>
            </div>

            <HeroSection />
        </div>
    )
}

export default HomePage