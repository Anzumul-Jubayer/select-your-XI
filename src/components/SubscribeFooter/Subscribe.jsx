import React from "react";
import bgImg from "../../assets/bg-shadow.png";

const Subscribe = () => {
  return (
    <div className="bg-white  relative z-20 mt-16 max-w-[1200px] mx-auto p-5 rounded-xl">
       <div className=" text-center bg-cover bg-center bg-no-repeat p-30 rounded-xl shadow-lg"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <h1 className="mt-3 font-bold text-3xl">Subscribe to our Newsletter</h1>
      <p className="mt-3 text-gray-400 font-semibold">
        Get the latest updates and news right in your inbox!
      </p>
      <div className="mt-5 flex justify-center gap-2">
        <input
          type="text"
          placeholder="Your email"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-warning">Subscribe</button>
      </div>
    </div>
    </div>
    
  );
};

export default Subscribe;
