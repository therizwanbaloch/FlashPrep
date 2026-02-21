import { buildPrompt } from "../config/promptBuilder.js";
import NotesModel from "../models/notes.modal.js";
import UserModel from "../models/user.modal.js";
import { generateGeminiResponse } from "../services/gemini.services.js";

export const generateNotes = async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ success: false, message: "Request body missing" });
    }

    const {
      topic,
      classLevel,
      examType,
      revisionMode = false,
      includeDiagram = false,
      includeCharts = false,
    } = req.body;

    if (!topic || typeof topic !== "string" || !topic.trim()) {
      return res.status(400).json({ success: false, message: "Topic is required and must be a valid string" });
    }

    const user = await UserModel.findById(req.userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (user.credits < 10) {
      user.isCreditsAvailable = false;
      await user.save();
      return res.status(400).json({ success: false, message: "Insufficient credits" });
    }

    let prompt;
    try {
      prompt = buildPrompt({ topic, classLevel, examType, revisionMode, includeDiagram, includeCharts });
    } catch (err) {
      return res.status(400).json({ success: false, message: err.message });
    }

    const aiResponse = await generateGeminiResponse(prompt);

    const notes = await NotesModel.create({
      user: user._id,
      topic: topic.trim(),
      classLevel,
      examType,
      revisionMode,
      includeDiagram,
      includeCharts,
      content: aiResponse,
    });

    user.credits -= 10;
    user.notes = user.notes || [];
    user.notes.push(notes._id);
    await user.save();

    return res.status(200).json({
      success: true,
      data: aiResponse,
      notesId: notes._id,
      creditsLeft: user.credits,
    });
  } catch (error) {
    console.error("Server error in generateNotes:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};