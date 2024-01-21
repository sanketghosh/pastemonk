import express from "express";
import "dotenv/config";
import cors from "cors";

import { connectDB } from "./config/db";

/** Database connection*/
connectDB();

const app = express();
const PORT = process.env.PORT || 8000;

/** BASIC MIDDLEWARES */
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
