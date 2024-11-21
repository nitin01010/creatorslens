import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image1Yt from "../../assite/image1yt.jpeg";
import image2yt from "../../assite/image2yt.png";
import image3 from "../../assite/image3.webp";
import image4 from "../../assite/image4.png";
import imageInsta from "../../assite/imageInsta.jpg";
import "swiper/css/effect-coverflow";
import "swiper/css";
import "react-responsive-modal/styles.css";
import { HiOutlineLightBulb } from "react-icons/hi";

const storeImage = [Image1Yt, image2yt, image3, image4, imageInsta];

const AboutCard = () => {
  return (
    <>
      {/* WHAT WE DO Setion */}
      <section>
        <div className=" flex flex-col gap-8">
          <p className=" uppercase text-[#00FCDB] text-center">WHAT WE DO</p>
          <h1 className=" text-center text-2xl leading-[2rem]  md:text-3xl  md:leading-[3rem] font-bold">
            <b className="text-[#00FCDB]">CreatorsLens</b> helps creators
            optimize <br /> social media growth with analytics and <br /> AI.
          </h1>
        </div>
        <div className="py-5 w-full">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000, // 2 seconds
              disableOnInteraction: false, // Continue autoplay after user interaction
              pauseOnMouseEnter: true, // Pause on hover (optional)
            }}
            style={{
              width: "100%", // Ensure swiper spans full width
              height: "auto", // Set height based on content (or adjust as needed)
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {storeImage.map((Itam, index) => (
              <SwiperSlide key={index}>
                <img
                  src={Itam}
                  className="object-cover m-4 h-[260px] w-full"
                  alt={`Slide ${index}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/*HUGE COLLECTION */}
      <section>
        <div>
          <p className=" text-center text-[#00FCDB]">HUGE COLLECTION</p>
          <h1 className=" text-3xl font-bold text-center mt-4">
            AI-Powered suggestions
          </h1>
          <br />
          <br />
          <div className=" grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-20    p-2 w-[100%]  md:w-[60%] m-auto">
            <div className=" flex flex-col   justify-center bg-[#000000] rounded-[10px] p-2 w-[100%]  md:w-[301px] h-[307px]">
              <HiOutlineLightBulb
                color="#00FCDB"
                size={30}
                className=" m-auto mb-2 -mt-10 "
              />
              <p className=" text-center text-2xl font-bold">Creativity</p>
              <p className=" text-gray-400 mt-3 text-center">
                Enhance your YouTube content with AI-driven suggestions for
                titles, descriptions, tags, and thumbnails.
              </p>
            </div>
            <div className=" flex flex-col   justify-center bg-[#000000] rounded-[10px] p-2 w-[100%]  md:w-[301px] h-[307px]">
              <HiOutlineLightBulb
                color="#00FCDB"
                size={30}
                className=" m-auto mb-2 -mt-10 "
              />
              <p className=" text-center text-2xl font-bold">AI suggestions</p>
              <p className=" text-gray-400 mt-3 text-center">
                Boost your YouTube content with smart AI suggestions for titles,
                descriptions, tags, and thumbnails to increase engagement.
              </p>
            </div>
            <div className=" flex flex-col   justify-center bg-[#000000] rounded-[10px] p-2 w-[100%] md:w-[301px] h-[307px]">
              <HiOutlineLightBulb
                color="#00FCDB"
                size={30}
                className=" m-auto mb-2 -mt-10 "
              />
              <p className=" text-center text-2xl font-bold">Earn More</p>
              <p className=" text-gray-400 mt-3 text-center">
                Maximize your YouTube earnings with data-driven insights and
                optimization tools that enhance video performance and audience
                engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCard;
