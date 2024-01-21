import express from "express";
import "dotenv/config";
import cors from "cors";

/** file imports */
import { connectDB } from "./config/db";
import appRoute from "./routes/app.routes";

/** database connection */
connectDB();

const app = express();
const PORT = process.env.PORT || 8000;

/** basic middlewares */
app.use(cors());
app.use(express.json());

/** route middlewares */
app.use("/api/v1", appRoute);

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
