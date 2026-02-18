import React from "react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#0B1220] text-white py-24 px-6">
      
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Start Creating Exam Notes Today
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Sign in and generate structured exam notes, charts, and downloadable PDFs in seconds.
          No setup. No complexity. Just smart learning.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/auth")}
          className="
            bg-blue-500 hover:bg-blue-600
            px-8 py-4
            rounded-lg
            font-semibold
            transition
            shadow-lg shadow-blue-500/20
          "
        >
          Get Started Free
        </button>

      </div>

    </section>
  );
};

export default CTA;
