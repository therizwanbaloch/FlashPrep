const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview:generateContent?key=" +
  process.env.GEMINI_API_KEY;

export const generateGeminiResponse = async (prompt) => {
  try {
    const response = await fetch(GEMINI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Gemini API error: ${error}`);
    }

    const data = await response.json();

    // Safe optional chaining
    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || null;

    if (!text) {
      throw new Error("No valid response from Gemini");
    }

    return text.trim();
  } catch (error) {
    console.error("Gemini request failed:", error);
    throw error;
  }
};
