import React, { useState } from "react";
import axios from "axios";

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

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.topic || !formData.examType) {
      alert("Topic and Exam Type are required");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/notes/generate",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = response.data;

      if (!data.success) {
        alert(data.message);
        return;
      }

      console.log("Generated Notes:", data);
      alert("Notes generated successfully!");

    } catch (error) {
      console.error(error);

      // Better error handling
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Server not responding");
      }
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
            required
          />
        </div>

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
            required
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
          className="mt-4 py-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-md"
        >
          {loading ? "Generating..." : "Generate Notes"}
        </button>
      </form>
    </div>
  );
};

export default TopicForm;