import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div>
      <div className="h-[389px] bg-[#f2c94c] flex flex-col justify-center items-center ">
        <h2 className="font-cerap font-bold text-[36px] leading-[114.5%] tracking-[-0.01em] text-[#232c35] mb-[1em] ">
          Sign up to our beta form
        </h2>
        <p className="w-[495px] font-cerap font-normal leading-[114.5%] text-center tracking-[-0.01em] text-[#233533] mb-[2em] ">
          Sign up to our mailing list to find out more information and keep up
          to date about our activities
        </p>
        <div className="flex">
          <input
            type="email"
            placeholder="email"
            className="h-[48px] w-[342px] bg-[#f2c94c] placeholder-white flex text-white items-center pl-[36px] font-brown text-[16px] outline-none border-2 border-white mr-[11px] "
          />
          <input
            type="button"
            value="Subcribe"
            className="w-[157px] h-[48px] flex justify-center items-center text-white font-brown text-[16px] outline-none cursor-pointer leading-[12px] bg-[#2c3539] "
          />
        </div>
      </div>
      <div className="flex justify-between h-[73px] bg-[#deb63d] px-[139px] items-center ">
        <span className="font-brown font-normal text-[11px] leading-[9px] text-white ">
          &copy; {date} Whichride - All rightsreserved.
        </span>
        <div className="font-brown font-normal text-[11px] leading-[9px] flex grid-rows-1 gap-[1em] text-white">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
