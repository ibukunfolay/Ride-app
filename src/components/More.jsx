import React from "react";
import { car, safety, setting, clock } from "../assets";

const More = () => {
  return (
    <div className=" lg:min-h-[913px] min-h-100vh md:bg-split bg-split2 w-full">
      <h2 className="font-cerap font-bold lg:text-[36px] text-[28px] leading-[112.5%] text-center tracking-[-0.01em] text-[#232c35] lg:pt-[98px] lg:mb-[59px] py-[2em]">
        Why Whichride
      </h2>
      <div className="lg:w-[858px] lg:h-[468px] w-full h-auto lg:p-0 p-[1em] flex flex-col items-center mx-auto lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 lg:gap-x-[182px] md:gap-x-[100px]">
        <div className="my-[2em] lg:my-0">
          <div className="h-[64px] w-[64px] rounded-full bg-[#56ccf2] flex items-center justify-center animate-bounce">
            <img src={car} alt="car vector" className="h-[30px] w-[30px] " />
          </div>
          <h4 className="my-[1em] font-cerap font-bold text-[20px] leading-[112.5%] tracking-[-0.01em] text-[#232c35] ">
            More choices
          </h4>
          <p className="w-[337px] font-cerap font-medium text-[18px] leading-[120%] tracking-[-0.01em] text-[#4f4f4f] ">
            WhichRide lets you compare pricing across the major rideshares so
            you can save money on every ride.
          </p>
        </div>
        <div className="my-[2em] lg:my-0">
          <div className="h-[64px] w-[64px] rounded-full bg-[#6fcf97] flex items-center justify-center ">
            <img src={setting} alt="settings" className="h-[30px] w-[30px] " />
          </div>
          <h4 className="my-[1em] font-cerap font-bold text-[20px] leading-[112.5%] tracking-[-0.01em] text-[#232c35] ">
            More choices
          </h4>
          <p className="w-[337px] font-cerap font-medium text-[18px] leading-[120%] tracking-[-0.01em] text-[#4f4f4f] ">
            WhichRide lets you compare pricing across the major rideshares so
            you can save money on every ride.
          </p>
        </div>
        <div className="my-[2em] lg:my-0">
          <div className="h-[64px] w-[64px] rounded-full bg-[#f2c94c] flex items-center justify-center ">
            <img src={clock} alt="time" className="h-[26.67px] w-[36.67px] " />
          </div>
          <h4 className="my-[1em] font-cerap font-bold text-[20px] leading-[112.5%] tracking-[-0.01em] text-[#232c35] ">
            More choices
          </h4>
          <p className="w-[337px] font-cerap font-medium text-[18px] leading-[120%] tracking-[-0.01em] text-[#4f4f4f] ">
            WhichRide lets you compare pricing across the major rideshares so
            you can save money on every ride.
          </p>
        </div>
        <div className="my-[2em] lg:my-0">
          <div className="h-[64px] w-[64px] rounded-full bg-[#bb6bd9] flex items-center justify-center ">
            <img src={safety} alt="safety" className="h-[35px] w-[36px] " />
          </div>
          <h4 className="my-[1em] font-cerap font-bold text-[20px] leading-[112.5%] tracking-[-0.01em] text-[#232c35] ">
            More choices
          </h4>
          <p className="w-[337px] font-cerap font-medium text-[18px] leading-[120%] tracking-[-0.01em] text-[#4f4f4f] ">
            WhichRide lets you compare pricing across the major rideshares so
            you can save money on every ride.
          </p>
        </div>
      </div>
    </div>
  );
};

export default More;
