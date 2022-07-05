import React from "react";
import iphone from "../assets/iPhone.png";

const About = () => {
  return (
    <div className="min-h-screen bg-[#5c1a8d] w-full md:pt-[116px] pt-[3em] pb-[3em]">
      <h2 className="flex font-cerap font-bold lg:text-[36px] text-[28px] leading-[112.5%] text-center mx-auto tracking-[-0.01em] text-white lg:w-[614px] md:w-2/3 w-full px-2 mb-[1em] ">
        Whichride brings together multiple ride hailing providers and local taxi
        firms in one app
      </h2>
      <p className="font-cerap font-medium lg:text-[20px] text-[16px] leading-[114.5%] text-center tracking-[-0.01em] text-[#e0e0e0] mx-auto lg:w-[497px] md:w-2/3 w-full px-2">
        Allowing riders to select the provider that offers the best price,
        service or travel time, then seamlessly book within the app
      </p>
      <div className="lg:pl-[284px] lg:pr-[290px] px-[2em] w-full flex items-center flex-wrap lg:flex-nowrap">
        <img
          src={iphone}
          alt="iphone"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="500"
          className=" shrink mx-auto"
        />
        <div className="flex flex-col items-center lg:p-0 gap-[39px]">
          <div className="flex items-center md:w-2/3  lg:w-full  mx-auto">
            <div className="mr-[31px] w-[60px] h-[55px] rounded-full p-2 bg-[#f2c94c] items-center justify-center flex font-cerap font-normal text-[14px] leading-[114.5%] text-center tracking-[-0.01em] text-black ">
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
          <div className="flex items-center md:w-2/3  lg:w-full  mx-auto">
            <div className="mr-[31px] w-[60px] h-[55px] rounded-full p-2 bg-[#f2f2f2] items-center justify-center flex font-cerap font-normal text-[14px] leading-[114.5%] text-center tracking-[-0.01em] text-black ">
              Step&nbsp;<span className="font-brown">2</span>
            </div>
            <div className="flex flex-col w-full">
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
          <div className="flex items-center md:w-2/3  lg:w-full  mx-auto">
            <div className="mr-[31px] w-[60px] h-[55px] rounded-full p-2 bg-[#f2f2f2] items-center justify-center flex font-cerap font-normal text-[14px] leading-[114.5%] text-center tracking-[-0.01em] text-black ">
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
