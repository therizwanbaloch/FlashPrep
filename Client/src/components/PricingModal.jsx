import React from "react";
import { useNavigate } from "react-router-dom";

const PricingModal = ({ isOpen }) => {
  if (!isOpen) return null;
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-[#0B1220] rounded-md shadow-lg p-4 text-white z-50">
      <h1 className="font-semibold text-sm text-center">
        Unlock Premium FlashPrep
      </h1>
      <p className="text-xs text-gray-300 text-center mt-1">
        Choose a plan and unlock unlimited AI-powered exam notes instantly.
      </p>
      <button
      onClick={() => navigate("/pricing")}
       className="w-full mt-3 py-2 font-semibold rounded-lg bg-white text-black hover:bg-gray-200 transition">
        Upgrade Now
      </button>
    </div>
  );
};

export default PricingModal;
