import express from "express";
import serverless from "serverless-http";
import quoteRoutes from "./routes/quoteRoutes.js";

const app = express();
app.use(express.json());

// Mount the routes directly at /api instead of /.netlify/functions/api
app.use("/api", quoteRoutes);

export const handler = serverless(app);
