// import path from "path";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";

import cors from "cors";

const FRONTEND_URL = process.env.FRONTEND_URL || "https://chatting-app-livid-eight.vercel.app/";

app.use(cors({
  origin: ["*"],
  credentials: true,
}));


import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";


// const __dirname = path.resolve();

const PORT = process.env.PORT || 5000;

app.use(express.json()); 
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.use(express.static(path.join(__dirname, "/frontend/dist")));

// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });

server.listen(PORT, async() => {
	await connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});