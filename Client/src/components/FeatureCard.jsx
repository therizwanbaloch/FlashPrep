import React from "react";

const FeatureCard = ({ title, description, icon }) => {
    return (
        <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 shadow-lg shadow-black/3hover:border-blue-500/40 hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300">


            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 mb-5 text-xl">
                {icon}
            </div>


            <h3 className="text-lg font-semibold mb-2">
                {title}
            </h3>


            <p className="text-gray-400 text-sm leading-relaxed">
                {description}
            </p>

        </div>
    );
};

export default FeatureCard;
