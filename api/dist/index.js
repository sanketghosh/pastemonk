"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const db_1 = require("./config/db");
/** Database connection*/
(0, db_1.connectDB)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});
