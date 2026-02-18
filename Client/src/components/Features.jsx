import React from "react";
import FeatureCard from "./FeatureCard";

import { FiGift, FiBookOpen, FiFileText, FiBarChart2 } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";

const Features = () => {
  return (
    <section 
    id="features"
     className="bg-[#0B1220] text-white py-20 px-6">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Powerful AI Study Features
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Everything you need to learn faster, stay organized, and succeed in exams 
          powered by intelligent AI tools.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        <FeatureCard
          icon={<FiGift size={26} />}
          title="Free Learning Credits"
          description="Start instantly with 100 free AI credits and explore all features without paying."
        />

        <FeatureCard
          icon={<FiBookOpen size={26} />}
          title="Exam-Focused Notes"
          description="Generate structured notes designed specifically for exam preparation."
        />

        <FeatureCard
          icon={<FiFileText size={26} />}
          title="Project Notes Generator"
          description="Create complete, well-organized project notes in seconds."
        />

        <FeatureCard
          icon={<FiBarChart2 size={26} />}
          title="Charts & Visual Learning"
          description="Understand complex topics with AI-generated charts and diagrams."
        />

        <FeatureCard
          icon={<HiOutlineDocumentDownload size={26} />}
          title="PDF Downloads"
          description="Download beautifully formatted notes for offline study anytime."
        />

        <FeatureCard
          icon={<FaRobot size={26} />}
          title="AI Study Assistant"
          description="Personalized learning help and smart recommendations."
        />

      </div>
    </section>
  );
};

export default Features;
