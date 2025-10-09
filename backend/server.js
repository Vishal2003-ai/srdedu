import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import contactRoutes from "./routes/contact.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI) // no need for deprecated options
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
