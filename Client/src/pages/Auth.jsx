import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { auth, Provider } from '../utils/firebase.js';
import axios from 'axios';

const Auth = () => {
  const handleGoogleAuth = async () => {
  try {
    const result = await signInWithPopup(auth, Provider);
    const user = result.user;

    const name = user.displayName;
    const email = user.email;

    const URL = import.meta.env.VITE_SERVER_URL;

    const response = await axios.post(
      `${URL}/auth/google`,
      { name, email },
      { withCredentials: true }
    );

    console.log(response.data);

  } catch (error) {
    console.log(error.message);
  }
};

    return (
        <div className='min-h-screen bg-[#0B1220] text-white overflow-hidden'>

            {/* Header */}
            <header className='w-full px-6 py-5 border-b border-[#1c2a44] flex items-center gap-3'>
                <img src="/logo.png" alt="FlashPrep Logo" className="h-10 w-auto" />
                <div>
                    <h1 className='font-bold text-2xl'>FlashPrep</h1>
                    <p className='text-xs text-gray-400'>
                        AI POWERED EXAMS ORIENTED NOTES AND REVISIONS
                    </p>
                </div>
            </header>

            {/* Main */}
            <main className='flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-80px)]'>

                {/* LEFT */}
                <div className='w-full lg:w-1/2 max-w-xl px-6 py-16 space-y-6'>
                    <h1 className='font-bold text-4xl lg:text-5xl leading-tight'>
                        Ace Your Exams with Smart Notes
                    </h1>

                    <p className='text-gray-300'>
                        FlashPrep gives you structured, easy-to-digest notes so you
                        spend less time studying and more time succeeding.
                    </p>

                    <button
                    onClick={handleGoogleAuth}
                     className='flex items-center gap-3 bg-white px-5 py-3 text-gray-800 font-semibold rounded-lg w-fit'>
                        <FcGoogle size={22} />
                        Continue with Google
                    </button>
                </div>

                {/* RIGHT IMAGE */}
                <div className='w-full lg:w-1/2 flex items-center justify-center p-6'>
                    <img
                        src="/heroImage.png"
                        alt="FlashPrep AI Study"
                        className="w-full max-w-2xl h-auto object-contain"
                    />
                </div>

            </main>
        </div>
    )
}

export default Auth
