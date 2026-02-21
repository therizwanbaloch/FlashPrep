import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";

// Routes
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import aiRouter from "./routes/ai.route.js";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Health check route
app.get("/test", (req, res) => {
  res.status(200).json({ message: "Server is running!" });
});

// API routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/notes", aiRouter);

// Start server and connect to DB
app.listen(port, async () => {
  try {
    await connectDB();
    console.log(`Server is running on port ${port} and DB connected`);
  } catch (err) {
    console.error("Failed to connect to DB", err);
  }
});