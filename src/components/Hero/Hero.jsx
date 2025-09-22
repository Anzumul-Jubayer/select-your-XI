import React from 'react';
import navImg from "../../assets/logo.png";
import dollarImg from "../../assets/dollar 1.png"
import bannerImg from "../../assets/banner-main.png"
const Hero = ({availableBalance}) => {
    return (
        <>
         {/* hero section */}
      <section className="max-w-[1500px] mx-auto">
        {/* nav bar */}
       <div className="navbar flex-col  lg:flex-row lg:justify-between lg:items-center">
        <a className="pl-4 text-xl">
          <img className="lg:w-[60px] lg:h-[60px] w-[80px] h-[80px]" src={navImg} alt="" />
        </a>
        <div className="pr-4 mt-5 lg:mt-0">
          <a className="ml-10" href="">Home</a> <a className="ml-10" href="">Fixture</a> <a className="ml-10" href="">Teams</a>
          <a className="ml-10" href="">Schedules</a>
          <button  className="mt-5 lg:mt-0 ml-30 lg:ml-10 btn">{availableBalance} <span>Coin</span> <img src={dollarImg} alt="" /> </button>
         </div>
      </div>
      {/* banner */}
       <div className=" bg-linear-to-r from-cyan-200 to-blue-300 text-center py-30 rounded-[24px] mt-10">
        <div className="flex justify-center">
            <img  src={bannerImg} alt="" />
        </div>
       
        <h1 className="text-white font-bold text-3xl my-3">Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <h3 className="text-gray-400 font-bold text-2xl my-3">Beyond Boundaries Beyond Limits</h3>
        <button className="btn btn-success text-white font-semibold">Claim Free Credit</button>
       </div>
      </section>
        </>
    );
};

export default Hero;