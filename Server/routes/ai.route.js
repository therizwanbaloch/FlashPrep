import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import { generateNotes } from "../controllers/ai.controller.js";

const aiRouter = express.Router()

aiRouter.post("/generate-notes", isAuth, generateNotes);

export default aiRouter