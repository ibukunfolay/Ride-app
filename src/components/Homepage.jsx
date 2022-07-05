import React, { useState } from "react";
import logo from "../assets/Logo.png";
import image1 from "../assets/image 1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Homepage = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="flex flex-col px-4  lg:pl-[129px] lg:pr-[76px] lg:min-h-[665px] h-auto ">
      <nav className="flex w-full justify-between items-center md:pt-[43px] pt-[1em] mb-[2em]">
        <a href="#" className="md:h-auto md:w-auto h-[35px] w-[150px] ">
          <img
            src={logo}
            alt="logo"
            className="flex items-center h-full w-full"
          />
        </a>
        <ul className="hidden lg:flex grid gap-[33px] grid-cols-3">
          <li className="font-cerap font-bold text-[14px] leading-[18px] text-[#2c3539] hover:text-slate-400">
            <a href="#">The App</a>
          </li>
          <li className="font-cerap font-bold text-[14px] leading-[18px] text-[#2c3539] hover:text-slate-400">
            <a href="#">About Us</a>
          </li>
          <li className="font-cerap font-bold text-[14px] leading-[18px] text-[#2c3539] hover:text-slate-400">
            <a href="#">Get in Touch</a>
          </li>
        </ul>
        <div className="lg:hidden ">
          <GiHamburgerMenu
            fontSize={28}
            onClick={() => setToggleMenu(!toggleMenu)}
          />
          {toggleMenu && (
            <div className="transition delay-700 duration-300 ease-in-out fixed top-0 right-0 bg-white w-full h-[100vh] flex flex-col justify-center items-center z-20">
              <IoClose
                fontSize={28}
                onClick={() => setToggleMenu(!toggleMenu)}
                className="text-space cursor-pointer absolute top-[20px] right-[20px] "
              />
              <ul className="flex flex-col justify-center items-center">
                <li className="font-cerap font-bold text-[16px] leading-[18px] text-[#2c3539] hover:text-slate-400 m-[1em]">
                  <a href="#">The App</a>
                </li>
                <li className="font-cerap font-bold text-[16px] leading-[18px] text-[#2c3539] hover:text-slate-400 m-[1em]">
                  <a href="#">About Us</a>
                </li>
                <li className="font-cerap font-bold text-[16px] leading-[18px] text-[#2c3539] hover:text-slate-400 m-[1em]">
                  <a href="#">Get in Touch</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <div className="flex flex-wrap lg:flex-nowrap w-full lg:pl-[50px] lg:pr-[60px] items-center">
        <div className="flex flex-col lg:w-[511px] w-full" data-aos="fade-up">
          <h2 className="font-cerap font-bold lg:text-[48px] text-center lg:text-justify text-[32px] leading-[53px] tracking-[-0.01em] text-[#232c35] mb-4 ">
            Compare & book
            <br />
            ride-hailing providers
          </h2>
          <p className="font-cerap font-medium lg:text-[20px] text-center lg:text-justify text-[16px] leading-[114.5%] tracking-[0.01em] text-[#4f4f4f] ">
            Save money and time with WhichRide.
            <br />
            Think Compare the market but for taxis.
          </p>
        </div>
        <img
          src={image1}
          alt="mobile app"
          className="lg:h-[551px] lg:w-[577px] shrink lg:shrink-0 mx-auto  "
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        />
      </div>
    </div>
  );
};

export default Homepage;
