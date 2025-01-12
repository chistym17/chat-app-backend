import express from "express";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import dotenv from "dotenv";
import connectmongoose from "./db/connectmongoose.js";
import { app, server } from "./socket/socket.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(cookieParser());
// Test route
app.get("/", (req, res) => {
  res.send("hello world");
});

// Route setup
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
// Start server and connect to MongoDB
server.listen(PORT, () => {
  connectmongoose();
  console.log("Connected to mongoose function");
  console.log(`Server running on port ${PORT}`);
});
