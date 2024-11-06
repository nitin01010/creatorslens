import HeroSection from "../components/ui/heroSection"
import { CiVideoOn } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";
import ManLogo from '../assite/Man.png';
import chat from '../assite/chat.png';
import AnimationGFI from '../assite/AI-Robot-unscreen.gif';
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { EffectCards } from 'swiper/modules';
import "swiper/css/effect-coverflow";
import "swiper/css";
import { FaCheck } from 'react-icons/fa';
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import snapchat from "../assite/snapchat.svg";
import facebook from "../assite/facebook.svg";
import instagram from "../assite/instagram.svg";
import youtube from "../assite/youtube.svg";


import { Space } from 'antd';
import { CommentOutlined, CalendarOutlined } from '@ant-design/icons';

const reviews = [
    {
        id: 1,
        text: "Amazing service! Highly recommend to everyone.",
        avatar: "https://i.pravatar.cc/150?img=1",
        name: "John Doe",
    },
    {
        id: 2,
        text: "Great product quality and customer support!",
        avatar: "https://i.pravatar.cc/150?img=2",
        name: "Jane Smith",
    },
    {
        id: 3,
        text: "Affordable and effective. Exceeded my expectations!",
        avatar: "https://i.pravatar.cc/150?img=3",
        name: "Alice Johnson",
    },
    {
        id: 4,
        text: "Love it! Will definitely come back for more.",
        avatar: "https://i.pravatar.cc/150?img=4",
        name: "Michael Brown",
    },
    {
        id: 5,
        text: "Fast shipping and very reliable. Thank you!",
        avatar: "https://i.pravatar.cc/150?img=5",
        name: "Emily Davis",
    },
];

const HomePage = () => {
    return (
        <>
            <div className=" bg-[#0D0D0D] text-white py-10">

                <div className="  flex justify-between flex-wrap-reverse md:flex-nowrap gap-2 p-2 w-full  md:w-[80%]  m-auto">
                    <div className=" flex flex-col gap-10 py-5 p-5   md:w-[80%]    ">
                        <h1 className="animate-fade-right animate-one animate-ease-in font-bold text-5xl md:text-5xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-[1.2] ">AI- Social <br />
                            Media Growth <br />
                            <b className=" text-[#0075FF]">Platform</b>
                        </h1>
                        <p>CreatorsLens.com helps creators grow <br /> with analytics, insights, and AI <br /> suggestions</p>
                        <button className=" w-[181px] shadow-2xl h-[60px] rounded-[10px] bg-[#3500FC]">Get Started</button>
                    </div>
                    <img src={ AnimationGFI } className=" w-[100%] lg:w-[60%] -mt-20" alt="Gif" />
                </div>

                <div className=" flex flex-col gap-8">
                    <p className=" uppercase text-[#00FCDB] text-center">WHAT WE DO</p>
                    <h1 className=" text-center text-3xl leading-[3rem] font-bold"><b className="text-[#00FCDB]">CreatorsLens</b> helps creators optimize <br /> social media growth with analytics and <br /> AI.</h1>
                </div>
                <br />
                <div className="py-5 w-full">
                    <Swiper
                        spaceBetween={ 10 }
                        slidesPerView={ 1 }
                        loop={ true }
                        autoplay={ {
                            delay: 2000, // 2 seconds
                            disableOnInteraction: false, // Continue autoplay after user interaction
                            pauseOnMouseEnter: true, // Pause on hover (optional)
                        } }
                        style={ {
                            width: "100%", // Ensure swiper spans full width
                            height: "auto", // Set height based on content (or adjust as needed)
                        } }
                        breakpoints={ {
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        } }
                    >
                        { [...Array(10)].map((_, index) => (
                            <SwiperSlide key={ index }>
                                <img
                                    src="https://images.unsplash.com/photo-1729830114379-4c3dfe391a74?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    className="object-cover m-4 h-[260px] w-full"
                                    alt={ `Slide ${index}` }
                                />
                            </SwiperSlide>
                        )) }
                    </Swiper>
                </div>
                <br />

                <div>
                    <p className=" text-center text-[#00FCDB]">HUGE COLLECTION</p>
                    <h1 className=" text-3xl font-bold text-center mt-4">AI-Powered suggestions</h1>
                    <br />
                    <br />
                    <div className=" grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-20    p-2 w-[60%] m-auto">
                        <div className=" flex flex-col   justify-center bg-[#000000] rounded-[10px] p-2 w-[301px] h-[307px]">
                            <HiOutlineLightBulb color="#00FCDB" size={ 30 } className=" m-auto mb-2 -mt-10 " />
                            <p className=" text-center text-2xl font-bold">Creativity</p>
                            <p className=" text-gray-400 mt-3 text-center">Adipiscing elit, sed do eiusmod
                                labore dolore magna aliqua.</p>
                        </div>
                        <div className=" flex flex-col   justify-center bg-[#000000] rounded-[10px] p-2 w-[301px] h-[307px]">
                            <HiOutlineLightBulb color="#00FCDB" size={ 30 } className=" m-auto mb-2 -mt-10 " />
                            <p className=" text-center text-2xl font-bold">AI suggestions</p>
                            <p className=" text-gray-400 mt-3 text-center">Adipiscing elit, sed do eiusmod
                                labore dolore magna aliqua.</p>
                        </div>
                        <div className=" flex flex-col   justify-center bg-[#000000] rounded-[10px] p-2 w-[301px] h-[307px]">
                            <HiOutlineLightBulb color="#00FCDB" size={ 30 } className=" m-auto mb-2 -mt-10 " />
                            <p className=" text-center text-2xl font-bold">Earn More</p>
                            <p className=" text-gray-400 mt-3 text-center">Adipiscing elit, sed do eiusmod
                                labore dolore magna aliqua.</p>
                        </div>
                    </div>

                </div>

                <br /> <br />

                <div>
                    <p className=" text-center text-[#00FCDB]">AFFORDABLE PLANS</p>
                    <p className=" text-center text-3xl mt-3 font-bold">Pricing Plans</p>
                    <div className="gap-5 mt-6 p-3 flex justify-center  ">
                        <div className="border-2 border-[#3500FC] flex flex-col justify-center items-center w-[500px] h-[600px] bg-[#000000] rounded-[10px] p-6">
                            <h1 className="text-3xl font-bold text-center text-white">Basic Plan</h1>
                            <p className="text-center mt-3 text-gray-400">Perfect for private individuals</p>
                            <p className="text-center mt-3 text-gray-400">Starting at:</p>
                            <p className="text-center text-[#00FCDB] text-4xl mt-3">
                                $2 <small className="text-sm text-white">/mo</small>
                            </p>
                            <div className="flex flex-col text-gray-400 capitalize justify-start items-start mt-4 space-y-2">
                                <p className="flex items-center"><FaCheck className="text-green-500 mr-3" />1 YouTube connect</p>
                                <p className="flex items-center"><FaCheck className="text-green-500 mr-3" />Update with one click</p>
                                <p className="flex items-center"><FaCheck className="text-green-500 mr-3" />Video suggestions</p>
                                <p className="flex items-center"><FaCheck className="text-green-500 mr-3" />Creativity suggestions</p>
                                <p className="flex items-center"><FaCheck className="text-green-500 mr-3" />Earn More</p>
                            </div>
                            <button className="w-[181px] shadow-2xl h-[60px] mt-6 rounded-[10px] bg-[#3500FC] text-white text-xl font-bold hover:bg-[#4F5BD5] transition-colors duration-300">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>

                <br /> <br />
                <br /> <br />

                <div className="bg-black  w-[95%] m-auto rounded-[10px]  ">
                    <iframe
                        width="100%"
                        height="600"
                        src="https://www.youtube.com/embed/a5QXsFwQlCo?si=0BCphkg8JIGEJMwR"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className=" rounded-[10px]"
                    />
                </div>

                <br /> <br />
                <br /> <br />

                <div className="h-[400px] w-[95%] md:w-[50%] p-4 m-auto">
                    <Swiper
                        effect={ 'cards' }
                        grabCursor={ true }
                        modules={ [EffectCards] }
                        className="mySwiper"
                    >
                        { reviews.map((review) => (
                            <SwiperSlide key={ review.id }>
                                <div className="bg-white border border-gray-200 h-full flex flex-col items-center justify-center p-6 rounded-lg shadow-lg text-center space-y-4">
                                    <Avatar
                                        size={ 64 }
                                        src={ review.avatar }
                                        icon={ <UserOutlined /> }
                                        className="border-2 border-gray-300 shadow-lg"
                                    />
                                    <p className="text-gray-900 font-semibold">{ review.name }</p>
                                    <p className="text-gray-600 italic">{ review.text }</p>
                                </div>
                            </SwiperSlide>
                        )) }
                    </Swiper>
                </div>
                <p className=" font-bold text-center mb-4 text-2xl">Our <big className=" text-[#3500FC]">Parterners</big></p>

                <div className="Hidden w-[95%] flex gap-20 justify-center items-center  overflow-x-scroll md:w-[70%] p-4 m-auto ">
                    <img src={ youtube } className="object-cover h-[60px]" />
                    <img src={ snapchat } className="object-cover h-[60px]" />
                    <img src={ facebook } className="object-cover h-[60px]" />
                    <img src={ instagram } className="object-cover h-[60px]" />
                </div>

                <br /> <br />
                <br /> <br />

                <div className="px-4 md:px-10 lg:px-20 py-10 ">
                    <p className="text-center text-[#00FCDB] uppercase tracking-wide font-medium">
                        Latest Posts
                    </p>
                    <p className="text-center mt-2 font-extrabold text-4xl text-white">
                        News & Articles
                    </p>
                    <div className="flex flex-wrap justify-center mt-10 gap-8">
                        { [...Array(3)].map((_, index) => (
                            <div
                                key={ index }
                                className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105"
                                style={ { minWidth: "320px", maxWidth: "360px", height: "500px" } }
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1491472253230-a044054ca35f?q=80&w=1768&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt={ `Blog ${index + 1}` }
                                    className="w-full h-[220px] object-cover"
                                />
                                <div className="p-5">
                                    <h3 className="text-white text-xl font-semibold mb-2">
                                        Blog Title { index + 1 }
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        This is a brief description of Blog { index + 1 }. It provides an overview of the blog content and entices readers to click and read more.
                                    </p>
                                    <div className="flex items-center text-gray-400 text-sm mb-4">
                                        <Avatar icon={ <UserOutlined /> } className="mr-2" />
                                        <span>Caroline Forsey</span>
                                    </div>
                                    <Space className="text-gray-400 text-xs">
                                        <span className="flex items-center">
                                            <CalendarOutlined className="mr-1" />
                                            June 25, 2023
                                        </span>
                                        <span className="flex items-center ml-4">
                                            <CommentOutlined className="mr-1" />
                                            0 Comments
                                        </span>
                                    </Space>
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage