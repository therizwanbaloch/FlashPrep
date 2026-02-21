import React, { useState } from "react";
import { generateNotes } from "../services/api.js"; 

const TopicForm = () => {
  const [formData, setFormData] = useState({
    topic: "",
    classLevel: "",
    examType: "",
    revisionMode: false,
    includeDiagram: false,
    includeCharts: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!formData.topic.trim()) {
      setError("Topic is required");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await generateNotes(formData);
      console.log(formData)
      setResult(response);
    } catch (err) {
      setError(err.message || "Failed to generate notes");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-start py-10 px-4 bg-[#0B1220]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-[#121b2e] p-6 rounded-lg shadow-lg flex flex-col gap-4"
      >
        <h2 className="text-white text-2xl font-semibold mb-4">
          Create Exam Notes
        </h2>

        
        <div className="flex flex-col">
          <label className="text-white mb-1">Topic</label>
          <input
            type="text"
            value={formData.topic}
            onChange={(e) => handleChange("topic", e.target.value)}
            className="px-4 py-2 rounded-md bg-[#0B1220] border border-gray-600 text-white"
          />
        </div>

        
        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

      
        <div className="flex flex-col">
          <label className="text-white mb-1">Class / Grade</label>
          <input
            type="text"
            value={formData.classLevel}
            onChange={(e) => handleChange("classLevel", e.target.value)}
            className="px-4 py-2 rounded-md bg-[#0B1220] border border-gray-600 text-white"
          />
        </div>

        
        <div className="flex flex-col">
          <label className="text-white mb-1">Exam Type</label>
          <input
            type="text"
            value={formData.examType}
            onChange={(e) => handleChange("examType", e.target.value)}
            className="px-4 py-2 rounded-md bg-[#0B1220] border border-gray-600 text-white"
          />
        </div>

      
        {["revisionMode", "includeDiagram", "includeCharts"].map(
          (field) => (
            <label key={field} className="flex items-center gap-2 text-white">
              <input
                type="checkbox"
                checked={formData[field]}
                onChange={(e) => handleChange(field, e.target.checked)}
                className="w-4 h-4 accent-sky-500"
              />
              {field.replace(/([A-Z])/g, " $1")}
            </label>
          )
        )}

    
        <button
          type="submit"
          disabled={loading}
          className={`mt-4 py-2 text-white font-semibold rounded-md transition ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-sky-500 hover:bg-sky-600"
          }`}
        >
          {loading ? "Generating Notes..." : "Generate Notes"}
        </button>

      
        {result && (
          <div className="mt-6 bg-[#0B1220] p-4 rounded-md text-white">
            <h3 className="font-semibold mb-2">Generated Notes:</h3>
            <pre className="whitespace-pre-wrap text-sm">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </form>
    </div>
  );
};

export default TopicForm;