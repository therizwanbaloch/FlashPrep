import React, { useState, useRef, useEffect } from "react";
import { IoDiamondSharp } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { CgNotes, CgProfile } from "react-icons/cg";
import PricingModal from "./PricingModal";
import AvatarModal from "./AvatarModal";

const NotesNav = () => {
  const [pricingModal, setPricingModalOpen] = useState(false);
  const [avatarModal, setAvatarModalOpen] = useState(false);

  const creditsRef = useRef();
  const profileRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (creditsRef.current && !creditsRef.current.contains(event.target)) {
        setPricingModalOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setAvatarModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#0B1220] via-[#0f172a] to-[#0B1220] border-b border-white/10">
      <header className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
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

        <div className="flex items-center gap-3 w-full lg:w-auto justify-center lg:justify-end relative">
          <div
            ref={creditsRef}
            onClick={() => setPricingModalOpen(!pricingModal)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:border-sky-400/40 transition cursor-pointer relative"
          >
            <IoDiamondSharp size={18} className="text-sky-400" />
            <span className="text-white text-sm font-semibold">100</span>
            <FaCirclePlus
              size={16}
              className="text-slate-300 hover:text-white cursor-pointer"
            />

            {/* modal  */}

            <div
              className={`absolute z-50 mt-2 ${
                window.innerWidth < 768
                  ? "top-full left-1/2 -translate-x-1/2"
                  : "top-full right-0"
              }`}
            >
              <PricingModal isOpen={pricingModal} />
            </div>
          </div>

          

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:border-sky-400/40 transition cursor-pointer">
            <CgNotes size={18} className="text-slate-200" />
            <span className="text-sm text-white font-medium hidden sm:inline">
              Your Notes
            </span>
          </div>

          

          <div
            ref={profileRef}
            onClick={() => setAvatarModalOpen(!avatarModal)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 backdrop-blur border border-white/10 hover:border-sky-400/40 transition cursor-pointer relative"
          >
            <CgProfile size={20} className="text-slate-200" />

            
            
            <div
              className={`absolute z-50 mt-2 ${
                window.innerWidth < 768
                  ? "top-full left-1/2 -translate-x-1/2"
                  : "top-full right-0"
              }`}
            >
              <AvatarModal
                isOpen={avatarModal}
                onClose={() => setAvatarModalOpen(false)}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NotesNav;
