import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FiEdit3 } from "react-icons/fi";
import { HiOutlineDocumentDownload } from "react-icons/hi";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="bg-[#0B1220] text-white py-20 px-6"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          How FlashPrep Works
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Create exam-ready notes in minutes. Sign in, choose your topic,
          customize what you need, and download structured notes instantly.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {/* Step 1 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-500/10 p-4 rounded-full">
              <FcGoogle size={28} />
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Sign in with Google
          </h3>

          <p className="text-gray-400">
            Access the platform quickly and securely using your Google account.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition">
          <div className="flex justify-center mb-4">
            <div className="bg-cyan-500/10 p-4 rounded-full">
              <FiEdit3 size={28} />
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Enter Topic & Customize
          </h3>

          <p className="text-gray-400">
            Provide your subject and choose what to include.Summaries,
            key points, and optional charts or visuals.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition">
          <div className="flex justify-center mb-4">
            <div className="bg-purple-500/10 p-4 rounded-full">
              <HiOutlineDocumentDownload size={28} />
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Generate & Download PDF
          </h3>

          <p className="text-gray-400">
            AI creates structured exam notes instantly. Review and download
            them as a ready-to-use PDF.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
