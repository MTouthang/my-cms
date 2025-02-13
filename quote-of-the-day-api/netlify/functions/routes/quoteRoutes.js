import express from "express";
import { getRandomQuote, addNewQuote } from "../controllers/quoteController.js";

const router = express.Router();

// Get a random quote
router.get("/quote", async (req, res) => {
  try {
    const quote = await getRandomQuote();
    res.json(quote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new quote
router.post("/quote", async (req, res) => {
  try {
    const { text, author } = req.body;
    const newQuote = await addNewQuote(text, author);
    res.status(201).json(newQuote);
  } catch (error) {
    res
      .status(error.message.includes("required") ? 400 : 500)
      .json({ error: error.message });
  }
});

export default router;
