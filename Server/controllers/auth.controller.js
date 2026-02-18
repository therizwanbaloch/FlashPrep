import { getToken } from "../config/token.js";
import UserModel from "../models/user.modal.js";

export const googleAuth = async (req, res) => {
  try {
    const { name, email } = req.body;

    
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and email are required",
      });
    }


    let user = await UserModel.findOne({ email });

    
    if (!user) {
      user = await UserModel.create({ name, email });
    }

    
    const token = getToken(user._id);

    
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, 
    });

    
    res.status(200).json({
      success: true,
      message: "Google login successful",
      user,
    });

  } catch (error) {
    console.error("Google Auth Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};


export const logOut = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });

  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};
