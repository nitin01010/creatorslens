import { useState } from "react";
import AnimationGFI from "../assite/AI-Robot-unscreen.gif";
import "swiper/css/effect-coverflow";
import "swiper/css";
import "react-responsive-modal/styles.css";
import { toast } from "react-toastify";
import axios from "axios";
import Header from "@/components/ui/header";
import { useNavigate } from "react-router-dom";
import BlogSection from "@/components/ui/blogSection";
import VideoSection from "@/components/ui/videoSection";
import PriceSection from "@/components/ui/priceSection";
import AboutCard from "@/components/ui/aboutCard";

const HomePage = () => {
    const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className=" bg-[#0D0D0D] text-white py-10">
        {/* AI- Social  Top Page Heading  */}
        <section>
          <div className="  flex justify-between flex-wrap-reverse md:flex-nowrap gap-2 p-2 w-full  md:w-[80%]  m-auto">
            <div className=" flex flex-col gap-10 py-5 p-5   md:w-[80%]    ">
              <h1 className="animate-fade-right animate-one animate-ease-in font-bold text-5xl md:text-5xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-[1.2] ">
                AI- Social <br />
                Media Growth <br />
                <b className=" text-[#0075FF]">Platform</b>
              </h1>
              <p>
                creatorslens.in helps creators grow <br /> with analytics,
                insights, and AI <br /> suggestions
              </p>
              <button
                className="  w-[181px] shadow-2xl h-[60px] rounded-[10px] bg-[#3500FC]"
                onClick={() => navigate("/signup")}
              >
                Get Started
              </button>
            </div>
            <img
              src={AnimationGFI}
              className=" w-[100%] lg:w-[60%] -mt-20"
              alt="Gif"
            />
          </div>
        </section>

        <AboutCard />

        <br />
        <br />
        <br />
        <PriceSection />
        <br />
        <br />


        <VideoSection />
        <br />
        <br />

        <BlogSection />
        <br />
        <br />
      </div>
    </>
  );
};

export default HomePage;
