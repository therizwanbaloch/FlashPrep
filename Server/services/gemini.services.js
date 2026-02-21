const GEMINI_MODELS = [
  "gemini-2.0-flash-lite",
  "gemini-2.0-flash",
  "gemini-2.5-flash-lite",
  "gemini-2.5-flash",
];

const getGeminiURL = (model) =>
  `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`;

export const generateGeminiResponse = async (prompt) => {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is missing in .env");
  }

  if (!prompt || typeof prompt !== "string" || !prompt.trim()) {
    throw new Error("Prompt must be a valid string");
  }

  let lastError = null;

  for (const model of GEMINI_MODELS) {
    try {
      const response = await fetch(getGeminiURL(model), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const code = errorData?.error?.code;
        if (code === 404 || code === 429) {
          console.warn(`Model ${model} failed with code ${code}, trying next...`);
          lastError = new Error(errorData?.error?.message);
          continue;
        }
        throw new Error(`Gemini API error: ${JSON.stringify(errorData)}`);
      }

      const data = await response.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!text) throw new Error("No valid response from Gemini");

      console.log(`✅ Success with model: ${model}`);
      return text.trim();

    } catch (err) {
      lastError = err;
      if (!err.message.includes("quota") && !err.message.includes("not found") && !err.message.includes("429")) {
        throw err;
      }
    }
  }

  throw new Error(`All Gemini models failed. Last error: ${lastError?.message}`);
};