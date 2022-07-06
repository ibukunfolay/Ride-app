import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div>
      <div className="h-[389px] bg-[#f2c94c] flex flex-col justify-center items-center ">
        <h2 className="font-cerap font-bold md:text-[36px] text-[28px] leading-[114.5%] tracking-[-0.01em] text-[#232c35] mb-[1em] ">
          Sign up to our beta form
        </h2>
        <p className="md:w-[495px] w-full px-2 font-cerap font-normal leading-[114.5%] text-center tracking-[-0.01em] text-[#233533] mb-[2em] ">
          Sign up to our mailing list to find out more information and keep up
          to date about our activities
        </p>
        <div className="flex w-full p-2 md:justify-center">
          <input
            type="email"
            placeholder="email"
            className="h-[48px] md:w-[342px] w-full bg-[#f2c94c] placeholder-white flex text-white items-center md:pl-[36px] pl-[20px] font-brown md:text-[16px] text-[14px] outline-none border-2 border-white mr-[11px] "
          />
          <input
            type="button"
            value="Subcribe"
            className="md:w-[157px] w-2/5 h-[48px] flex justify-center items-center text-white font-brown md:text-[16px] text-[14px] outline-none cursor-pointer leading-[12px] bg-[#2c3539] "
          />
        </div>
      </div>
      <div className="flex justify-between h-[73px] bg-[#deb63d] lg:px-[139px] px-1 items-center w-full ">
        <span className="font-brown font-normal text-[11px] leading-[9px] text-white ">
          &copy; {date} Whichride - All rightsreserved.
        </span>
        <div className="font-brown font-normal text-[11px] leading-[9px] flex text-white">
          <a href="#" className="lg:mr-[1em] mr-2">
            Privacy Policy
          </a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
