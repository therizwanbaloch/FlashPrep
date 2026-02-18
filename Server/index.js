import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();


app.use(cookieParser());
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true              
}));
// just or health route for ping server.....................................................

app.get("/test", (req, res) => {
  res.status(200).json({ message: "server is running!" });
});

// auth Route is here.....................................

app.use("/api/auth", authRouter)

// user Route is here........................................................

app.use("/api/user", userRouter)

// liten on port 

app.listen(port, async () => {
  console.log("server is running on port", port);
  connectDB();
});
