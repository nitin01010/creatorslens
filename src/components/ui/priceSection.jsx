import React from 'react'
import { FaCheck } from "react-icons/fa";

const PriceSection = () => {
  return (
    <section>
    <div>
      <p className=" text-center text-[#00FCDB]">AFFORDABLE PLANS</p>
      <p className=" text-center text-3xl mt-3 font-bold">
        Pricing Plans
      </p>
      <div className="gap-5 mt-6 p-3 flex justify-center  ">
        <div className="border-2 border-[#3500FC] flex flex-col justify-center items-center w-[500px] h-[600px] bg-[#000000] rounded-[10px] p-6">
          <h1 className="text-3xl font-bold text-center text-white">
            Basic Plan
          </h1>
          <p className="text-center mt-3 text-gray-400">
            Perfect for private individuals
          </p>
          <p className="text-center mt-3 text-gray-400">Starting at:</p>
          <p className="text-center text-[#00FCDB] text-4xl mt-3">
            ₹99 <small className="text-sm text-white">/mo</small>
          </p>
          <div className="flex flex-col text-gray-400 capitalize justify-start items-start mt-4 space-y-2">
            <p className="flex items-center">
              <FaCheck className="text-green-500 mr-3" />1 YouTube connect
            </p>
            <p className="flex items-center">
              <FaCheck className="text-green-500 mr-3" />
              Update with one click
            </p>
            <p className="flex items-center">
              <FaCheck className="text-green-500 mr-3" />
              Video suggestions
            </p>
            <p className="flex items-center">
              <FaCheck className="text-green-500 mr-3" />
              Creativity suggestions
            </p>
            <p className="flex items-center">
              <FaCheck className="text-green-500 mr-3" />
              Earn More
            </p>
          </div>
          <button
            className=" w-[181px] shadow-2xl h-[60px] mt-6 rounded-[10px] bg-[#3500FC] text-white text-xl font-bold hover:bg-[#4F5BD5] transition-colors duration-300"
            onClick={() => ''}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PriceSection