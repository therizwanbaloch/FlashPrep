import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../redux/userSlice";

const AvatarModal = ({ isOpen, onClose }) => {
  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!isOpen) return null;
  const URL = import.meta.env.VITE_SERVER_URL;

  const handleLogout = async () => {
    await axios.get(`${URL}/auth/logout`);
    navigate("/auth");
    dispatch(setUserData(null));
    onClose && onClose();
  };

  return (
    <div className="absolute right-0 mt-2 w-64 bg-[#0B1220] rounded-md shadow-lg p-4 text-white z-50">
      <button
        onClick={() => {
          navigate("/history");
          onClose && onClose();
        }}
        className="w-full mt-1 py-2 font-semibold rounded-lg bg-white text-black hover:bg-gray-200 transition"
      >
        History
      </button>

      <button
        onClick={handleLogout}
        className="w-full mt-2 py-2 text-red-500 font-semibold rounded-lg bg-white/5 hover:bg-red-500/20 transition"
      >
        Sign Out
      </button>
    </div>
  );
};

export default AvatarModal;
