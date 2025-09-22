import React from "react";
import footerImg from "../../assets/logo-footer.png";
const Footer = () => {
  return (
    <div className="max-w-[1500px] mx-auto bg-[#06091a] px-18 lg:px-30   py-24 lg:py-35 -mt-40">
      <div className="flex justify-center mt-18">
        <img src={footerImg} alt="" />
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between mt-16 ">
        <div className="w-full lg:w-1/3">
          <h2 className="text-white font-semibold">About Us</h2>
          <p className="text-gray-400">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>
          <div className="my-5 lg:my-0">
        <h2 className="text-white font-semibold">Quick Links</h2>
        <ul className="text-gray-400 list-disc ">
          <li>Home</li>
          <li>Service</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h2 className="text-white font-bold">Subscribe</h2>
        <p className="text-gray-400">Subscribe to our newsletter for <br/> the latest updates.</p>
        <div className="flex items-center">
          <input type="text" placeholder="Your-email" className="input mt-3 block" />
        <button className="btn btn-warning ml-1 mt-2 block">Subscribe</button>
        </div>
       
      </div>
      </div>
    
    </div>
  );
};

export default Footer;
