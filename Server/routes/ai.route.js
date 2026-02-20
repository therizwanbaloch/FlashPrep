import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import { generateGeminiResponse } from "../services/gemini.services.js";

const aiRouter = express.Router()

aiRouter.post("/generate-notes", isAuth, generateGeminiResponse);

export default aiRouter