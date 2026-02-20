import React from "react";
import { IoLogoUsd } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

const PricingCard = ({ name, oneLineDes, Amount, buttonColor, List }) => {
  return (
    <div className="bg-[#111827] w-full max-w-sm mx-auto border border-white/10 rounded-2xl p-5 sm:p-6 shadow-lg hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 text-white flex flex-col">

      
      <div className="mb-5 text-left">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">{name}</h2>
        <p className="text-gray-400 text-sm sm:text-base">{oneLineDes}</p>
      </div>

      
      <div className="text-center mb-3">
        <h1 className="flex items-baseline justify-center gap-1 text-4xl sm:text-5xl font-extrabold">
          <IoLogoUsd className="text-current" />
          <span>{Amount}</span>
        </h1>
      </div>

      
      <p className="text-gray-400 text-sm text-left mb-4">
        Pause or cancel anytime. <br />
        7 days money-back guarantee.
      </p>

    

      <button
        className={`${buttonColor} w-full py-3 rounded-xl font-semibold transition mb-6`}
      >
        Get Started
      </button>

      

      <ul className="flex flex-col gap-3 text-sm sm:text-base">
        {List?.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-left">
            <FaCheckCircle className="text-blue-500 mt-1 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;