import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div
      id="home"
      className="min-h-screen bg-[#0B1220] text-white overflow-hidden relative"
    >
      {/* Header */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 py-5 border-b border-[#1c2a44] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="FlashPrep Logo" className="h-10 w-auto" />
          <div>
            <h1 className="font-bold text-xl">FlashPrep</h1>
            <p className="text-xs text-gray-400">
              AI POWERED EXAMS ORIENTED NOTES
            </p>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-16 gap-12">
        
        {/* LEFT */}
        <div className="lg:w-1/2 space-y-7">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
            Ace Your Exams with{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Smart AI Notes
            </span>
          </h1>

          <p className="text-gray-300 text-lg max-w-lg">
            Generate structured exam notes, project summaries, charts,
            and downloadable PDFs instantly, powered by intelligent AI.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button
            onClick={() => {
              navigate("/auth")
            }}
             className="bg-blue-500 hover:bg-blue-600 px-7 py-3 rounded-lg font-semibold transition">
              Get Started Free
            </button>

            <a
            href="#how-it-works"
            className="border border-white/20 hover:border-white/40 px-7 py-3 rounded-lg transition">
              See How It Works
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE — SIMPLE */}
        <div className="lg:w-1/2 flex justify-center items-center">
          
          {/* simple container */}
          <div className="p-6 border border-[#1c2a44] rounded-2xl bg-[#0f172a]">
            <img
              src="/heroImage.png"
              alt="FlashPrep AI Robot"
              className="w-full max-w-sm object-contain"
            />
          </div>

        </div>
      </main>
    </div>
  );
};

export default Hero;
