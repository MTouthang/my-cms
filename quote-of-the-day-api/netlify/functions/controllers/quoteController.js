import Quote from "../models/Quote.js";
import { connectToDatabase } from "../config/database.js";

export const getRandomQuote = async () => {
  try {
    await connectToDatabase();
    const count = await Quote.countDocuments();
    const random = Math.floor(Math.random() * count);
    const quote = await Quote.findOne().skip(random);

    if (!quote) {
      throw new Error("No quotes found");
    }

    return quote;
  } catch (error) {
    throw new Error("Failed to fetch quote: " + error.message);
  }
};

export const addNewQuote = async (text, author) => {
  try {
    if (!text || !author) {
      throw new Error("Text and author are required");
    }

    await connectToDatabase();
    const quote = new Quote({ text, author });
    await quote.save();
    return quote;
  } catch (error) {
    throw new Error(error.message || "Failed to add quote");
  }
};
