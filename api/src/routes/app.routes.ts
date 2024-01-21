import express from "express";
import {
  defaultRouteHandler,
  getNoteHandler,
  makeDuplicateNoteHandler,
  newNoteHandler,
  saveNoteHandler,
} from "../controllers/app.controllers";

const router = express.Router();

/**
 * @route GET /api/v1
 */
router.get("/", defaultRouteHandler);

/**
 * @route GET /api/v1/new
 */
router.get("/new", newNoteHandler);

/**
 * @route GET /api/v1/:id
 */
router.get("/:id", getNoteHandler);

/**
 * @route GET /api/v1/:id/duplicate
 */
router.get("/:id/duplicate", makeDuplicateNoteHandler);

/**
 * @route POST /api/v1/save
 */
router.post("/save", saveNoteHandler);

export default router;
