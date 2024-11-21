import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import "swiper/css/effect-coverflow";
import "swiper/css";
import youtube from "../../assite/youtube.svg";
import snapchat from "../../assite/snapchat.svg";
import facebook from "../../assite/facebook.svg";
import instagram from "../../assite/instagram.svg";

const reviews = [
  {
    id: 1,
    text: "This platform is a game changer! The AI suggestions helped me improve my YouTube videos so much. Highly recommend!",
    avatar: "https://i.pravatar.cc/150?img=1",
    name: "David Wilson",
  },
  {
    id: 2,
    text: "I saw a huge improvement in my video engagement after using the suggestions. The interface is user-friendly and easy to navigate.",
    avatar: "https://i.pravatar.cc/150?img=2",
    name: "Sophia Lee",
  },
  {
    id: 3,
    text: "CreatorsLens helped me optimize my channel with minimal effort. The AI suggestions for thumbnails and tags were spot on!",
    avatar: "https://i.pravatar.cc/150?img=3",
    name: "James Anderson",
  },
  {
    id: 4,
    text: "I’m impressed! The platform offers incredible value with its AI-powered tools. Definitely a must-have for content creators.",
    avatar: "https://i.pravatar.cc/150?img=4",
    name: "Olivia Martinez",
  },
  {
    id: 5,
    text: "CreatorsLens is the best tool for optimizing your YouTube content. I can’t believe how much easier it is to get higher engagement!",
    avatar: "https://i.pravatar.cc/150?img=5",
    name: "Ethan Harris",
  },
];

const VideoSection = () => {
  return (
    <>
    <br />
      <br />
      <br />
      {/* Card Section */}
      <div className="bg-black  w-[95%] m-auto rounded-[10px]  ">
        <iframe
          width="100%"
          // height="600"
          src="https://www.youtube.com/embed/a5QXsFwQlCo?si=0BCphkg8JIGEJMwR"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className=" rounded-[10px] h-[500px]  md:h-[600px]"
        />
      </div>
      <br />
      <br />
      <br />
      {/* Logo Brands  */}
      <div className="h-[400px] w-[95%] md:w-[50%] p-4 m-auto">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white border border-gray-200 h-full flex flex-col items-center justify-center p-6 rounded-lg shadow-lg text-center space-y-4">
                <Avatar
                  size={64}
                  src={review.avatar}
                  icon={<UserOutlined />}
                  className="border-2 border-gray-300 shadow-lg"
                />
                <p className="text-gray-900 font-semibold">{review.name}</p>
                <p className="text-gray-600 italic">{review.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p className=" font-bold text-center mb-4 text-2xl">
        Our <big className=" text-[#3500FC]">Parterners</big>
      </p>
      <br />
      <br />
      <br />
      {/* Video Section  */}
      <div className="Hidden w-[95%] flex gap-20 justify-center items-center   overflow-x-scroll md:w-[70%] p-4 m-auto ">
        <img
          src={youtube}
          className="object-cover animate-jump animate-infinite animate-duration-[3000ms] animate-ease-linear ml-56 md:ml-0  h-[60px]"
        />
        <img
          src={snapchat}
          className="object-cover animate-jump animate-infinite animate-duration-[3000ms] animate-ease-linear  h-[60px]"
        />
        <img
          src={facebook}
          className="object-cover animate-jump animate-infinite animate-duration-[3000ms] animate-ease-linear  h-[60px]"
        />
        <img
          src={instagram}
          className="object-cover animate-jump animate-infinite animate-duration-[3000ms] animate-ease-linear  h-[60px]"
        />
      </div>
    </>
  );
};

export default VideoSection;
