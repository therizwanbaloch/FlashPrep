import React from "react";
import PricingCard from "../components/PricingCard"; // adjust path if needed

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#0B1220] text-white px-4 text-center py-16">

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        Start Creating Exam Notes Today
      </h2>

      <p className="text-gray-400 text-lg mb-12 max-w-2xl">
        Sign in and generate structured exam notes, charts, and downloadable PDFs in seconds.
        No setup. No complexity. Just smart learning.
      </p>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">

        {/* Starter */}
        <PricingCard
          name="Starter Plan"
          oneLineDes="Perfect for quick exam revision notes"
          Amount="9"
          buttonColor="bg-green-500 hover:bg-green-600"
          List={[
            "Generate structured exam notes",
            "Auto charts & summaries",
            "PDF download",
            "Smart formatting",
            "Fast AI responses",
          ]}
        />

        {/* Pro (Center Purple) */}
        <PricingCard
          name="Pro Plan"
          oneLineDes="Best for serious learners"
          Amount="19"
          buttonColor="bg-purple-600 hover:bg-purple-700"
          List={[
            "Unlimited note generation",
            "Advanced charts & graphs",
            "High-quality PDF exports",
            "Priority processing",
            "Organized note history",
            "Clean exam formatting",
          ]}
        />

        {/* Premium */}
        <PricingCard
          name="Premium Plan"
          oneLineDes="Ultimate study experience"
          Amount="29"
          buttonColor="bg-green-500 hover:bg-green-600"
          List={[
            "Everything in Pro Plan",
            "Deep AI explanations",
            "Premium visual diagrams",
            "Unlimited downloads",
            "Cloud storage",
            "Early feature access",
          ]}
        />

      </div>
    </div>
  );
};

export default PricingPage;