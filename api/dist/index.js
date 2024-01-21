"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
/** file imports */
const db_1 = require("./config/db");
const app_routes_1 = __importDefault(require("./routes/app.routes"));
/** database connection */
(0, db_1.connectDB)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
/** basic middlewares */
app.use((0, cors_1.default)());
app.use(express_1.default.json());
/** route middlewares */
app.use("/api/v1", app_routes_1.default);
app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});
