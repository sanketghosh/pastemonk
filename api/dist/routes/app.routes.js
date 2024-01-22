"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_controllers_1 = require("../controllers/app.controllers");
const router = express_1.default.Router();
/**
 * @route GET /api/v1
 */
router.get("/", app_controllers_1.defaultRouteHandler);
/**
 * @route GET /api/v1/new
 */
router.get("/new", app_controllers_1.newDocumentHandler);
/**
 * @route GET /api/v1/:id
 */
router.get("/:id", app_controllers_1.getDocumentHandler);
/**
 * @route GET /api/v1/:id/duplicate
 */
router.get("/:id/duplicate", app_controllers_1.makeDuplicateDocumentHandler);
/**
 * @route POST /api/v1/save
 */
router.post("/save", app_controllers_1.saveDocumentHandler);
exports.default = router;
