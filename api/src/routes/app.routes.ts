import express from "express";
import {
  defaultRouteHandler,
  getDocumentHandler,
  makeDuplicateDocumentHandler,
  newDocumentHandler,
  saveDocumentHandler,
} from "../controllers/app.controllers";

const router = express.Router();

/**
 * @route GET /api/v1
 */
router.get("/", defaultRouteHandler);

/**
 * @route GET /api/v1/new
 */
router.get("/new", newDocumentHandler);

/**
 * @route GET /api/v1/:id
 */
router.get("/:id", getDocumentHandler);

/**
 * @route GET /api/v1/:id/duplicate
 */
router.get("/:id/duplicate", makeDuplicateDocumentHandler);

/**
 * @route POST /api/v1/save
 */
router.post("/save", saveDocumentHandler);

export default router;
