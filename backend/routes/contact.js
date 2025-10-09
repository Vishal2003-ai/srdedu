import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error. Try again later." });
  }
});

export default router;
