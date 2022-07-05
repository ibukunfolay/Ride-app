import React from "react";
import iphone from "../assets/iPhone.png";

const About = () => {
  return (
    <div className="min-h-screen bg-[#5c1a8d] w-full pt-[116px]">
      <h2 className="flex font-cerap font-bold text-[36px] leading-[112.5%] text-center mx-auto tracking-[-0.01em] text-white w-[614px] mb-[1em] ">
        Whichride brings together multiple ride hailing providers and local taxi
        firms in one app
      </h2>
      <p className="font-cerap font-medium text-[20px] leading-[114.5%] text-center tracking-[-0.01em] text-[#e0e0e0] mx-auto w-[497px] ">
        Allowing riders to select the provider that offers the best price,
        service or travel time, then seamlessly book within the app
      </p>
      <div className="pl-[294px] pr-[304px] flex items-center ">
        <img src={iphone} alt="iphone" />
        <div className="flex flex-col items-center p-0 gap-[39px]">
          <div className="flex">
            <div className="mr-[2em] w-[50px] h-[50px] rounded-full p-2 bg-[#f2c94c] items-center justify-center flex font-cerap font-normal text-[14px] leading-[114.5%] text-center tracking-[-0.01em] text-black ">
              Step&nbsp;<span className="font-brown">1</span>
            </div>
            <div className="flex flex-col">
              <h2 className="font-cerap font-bold text-[24px] leading-[112.5%] tracking-[-0.01em] text-white mb-2 ">
                Enter location
              </h2>
              <p className="font-cerap font-medium font-[17.3px] leading-[114.5%] tracking-[-0.01em] text-[#f7f7f7] ">
                Enter your destination to see a list of taxi providers near you.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-[2em] w-[50px] h-[50px] rounded-full p-2 bg-[#f2f2f2] items-center justify-center flex font-cerap font-normal text-[14px] leading-[114.5%] text-center tracking-[-0.01em] text-black ">
              Step&nbsp;<span className="font-brown">2</span>
            </div>
            <div className="flex flex-col">
              <h2 className="font-cerap font-bold text-[24px] leading-[112.5%] tracking-[-0.01em] text-white mb-2 ">
                Find the perfect ride
              </h2>
              <p className="font-cerap font-medium font-[17.3px] leading-[114.5%] tracking-[-0.01em] text-[#f7f7f7] ">
                Filter results by driver rating, driver sex, waiting times,
                price or speed. Reduce carbon footprint by only showing hybrid
                or electric cars.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-[2em] w-[50px] h-[50px] rounded-full p-2 bg-[#f2f2f2] items-center justify-center flex font-cerap font-normal text-[14px] leading-[114.5%] text-center tracking-[-0.01em] text-black ">
              Step&nbsp;<span className="font-brown">3</span>
            </div>
            <div className="flex flex-col">
              <h2 className="font-cerap font-bold text-[24px] leading-[112.5%] tracking-[-0.01em] text-white mb-2 ">
                Pay and Save
              </h2>
              <p className="font-cerap font-medium font-[17.3px] leading-[114.5%] tracking-[-0.01em] text-[#f7f7f7] ">
                Once you select a ride, we search the web for coupons to get you
                an even better deal, then book seemlessly within our app and
                earn points while you ride.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
