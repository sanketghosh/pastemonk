import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "./config/db";

/** Database connection*/
connectDB();

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
