import React from "react";
import { IoDiamondSharp } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { CgNotes, CgProfile } from "react-icons/cg";

const NotesNav = () => {
  return (
    <div className="bg-gradient-to-r from-[#0B1220] via-[#0f172a] to-[#0B1220] border-b border-white/10">
      <header className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left Section */}
        <div className="items-center gap-3 hidden lg:flex">
          <img
            src="/logo.png"
            alt="FlashPrep Logo"
            className="h-10 w-auto drop-shadow-lg"
          />

          <div className="leading-tight">
            <h1 className="font-semibold text-lg text-white tracking-wide">
              FlashPrep
            </h1>
            <p className="text-[11px] text-slate-400 tracking-wider">
              AI POWERED EXAMS ORIENTED NOTES
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Credits */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:border-sky-400/40 transition">
            <IoDiamondSharp size={18} className="text-sky-400" />
            <span className="text-white text-sm font-semibold">100</span>
            <FaCirclePlus
              size={16}
              className="text-slate-300 hover:text-white cursor-pointer"
            />
          </div>

          {/* Your Notes */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:border-sky-400/40 transition cursor-pointer">
            <CgNotes size={18} className="text-slate-200" />
            <span className="text-sm text-white font-medium">Your Notes</span>
          </div>

          {/* Profile */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 backdrop-blur border border-white/10 hover:border-sky-400/40 transition cursor-pointer">
            <CgProfile size={20} className="text-slate-200" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default NotesNav;