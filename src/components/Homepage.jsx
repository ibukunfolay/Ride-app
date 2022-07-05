import React from "react";
import logo from "../assets/Logo.png";
import image1 from "../assets/image 1.png";

const Homepage = () => {
  return (
    <div className="flex flex-col pl-[129px] pr-[76px] h-[665px] ">
      <nav className="flex w-full justify-between items-center pt-[43px]">
        <a href="#">
          <img src={logo} alt="logo" className="flex items-center " />
        </a>
        <ul className="flex grid gap-[33px] grid-cols-3">
          <li className="font-cerap font-bold text-[14px] leading-[18px] text-[#2c3539]">
            <a href="#">The App</a>
          </li>
          <li className="font-cerap font-bold text-[14px] leading-[18px] text-[#2c3539]">
            <a href="#">About Us</a>
          </li>
          <li className="font-cerap font-bold text-[14px] leading-[18px] text-[#2c3539]">
            <a href="#">Get in Touch</a>
          </li>
        </ul>
      </nav>
      <div className="flex w-full pl-[59px] pr-[67px] items-center">
        <div className="flex flex-col w-[511px]">
          <h2 className="font-cerap font-bold text-[48px] leading-[53px] tracking-[-0.01em] text-[#232c35] mb-4 ">
            Compare & book
            <br />
            ride-hailing providers
          </h2>
          <p className="font-cerap font-medium text-[20px] leading-[114.5%] tracking-[0.01em] text-[#4f4f4f] ">
            Save money and time with WhichRide.
            <br />
            Think Compare the market but for taxis.
          </p>
        </div>
        <img
          src={image1}
          alt="mobile app"
          className="h-[551px] w-[577px] mt-[30px] mb-1 "
        />
      </div>
    </div>
  );
};

export default Homepage;
