import React from "react";
import imageAbout from '../assets/image 54.png'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col mx-20 md:mx-10 sm:mx-1">
      <img src={imageAbout} alt="Loading" className="object-cover lg:w-[710px] lg:h-[620px] ms:w-[630px] rounded-lg m-5 sm:m-0 sm:my-5 hover:scale-105 ease-linear duration-1000 sm:h-[340px] " />
      <div className="flex flex-wrap flex-col justify-around lg:items-center sm:items-start lg:m-5 sm:m-0 md:my-5 ">
        <h2 className="text-center sm:text-start text-[32px] md:text-[27px] sm:text-[21px] font-bold leading-9 sm:leading-7">Don’t squeeze in a sedan when you could relax in a van.</h2>
        <div className="px-[95px] sm:px-[0] sm:my-5">
          <p className="text-start text-[17px] md:text-[16px] sm:text-[14px] font-medium leading-7 sm:leading-6">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉)</p>
          <p className="text-start text-[17px] md:text-[16px] sm:text-[14px] mt-[8px] md:mt-[20px] font-medium leading-7 sm:leading-6">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        <div className="rounded-md bg-[#FFCC8D] h-[178px] md:h-[158px] sm:h-[138px] sm:mb-[20px] md:w-[580px]">
          <h2 className="text-[27px] md:text-[24px] sm:text-[21px] font-semibold leading-8 sm:leading-7 py-[32px] px-[37px] md:py-[22px] md:px-[27px] sm:py-[12px] sm:px-[25px]"> Your destination is waiting.
            <br />Your van is ready.
          </h2>
          <Link to='/vans' className="bg-[#000] rounded-xl ml-[37px] md:ml-[27px] sm:ml-[27px]  px-[22px] py-[12px]">
            <span className=" text-[#fff] text-[16px] leading-6 sm:leading-5 font-semibold text-center">Explore our vans</span>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default About;
