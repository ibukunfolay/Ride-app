import React from "react";
import logo from "../assets/Logo.png";
import image1 from "../assets/image 1.png";

const Homepage = () => {
  return (
    <div className="flex flex-col px-4  lg:pl-[129px] lg:pr-[76px] lg:min-h-[665px] h-auto ">
      <nav className="flex w-full justify-between items-center pt-[43px] mb-[2em]">
        <a href="#">
          <img src={logo} alt="logo" className="flex items-center " />
        </a>
        <ul className="hidden lg:flex grid gap-[33px] grid-cols-3">
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
      <div className="flex flex-wrap lg:flex-nowrap w-full lg:pl-[59px] lg:pr-[67px] items-center">
        <div className="flex flex-col lg:w-[511px] w-full" data-aos="fade-up">
          <h2 className="font-cerap font-bold md:text-[48px] text-center lg:text-justify text-[32px] leading-[53px] tracking-[-0.01em] text-[#232c35] mb-4 ">
            Compare & book
            <br />
            ride-hailing providers
          </h2>
          <p className="font-cerap font-medium md:text-[20px] text-center lg:text-justify text-[16px] leading-[114.5%] tracking-[0.01em] text-[#4f4f4f] ">
            Save money and time with WhichRide.
            <br />
            Think Compare the market but for taxis.
          </p>
        </div>
        <img
          src={image1}
          alt="mobile app"
          className="lg:h-[551px] lg:w-[577px] shrink mx-auto "
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        />
      </div>
    </div>
  );
};

export default Homepage;
