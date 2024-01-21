import { Request, Response } from "express";

/**
 * @route GET /api/v1
 * @description The function is for the default route
 * @access PUBLIC
 */

export const defaultRouteHandler = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      message:
        "Welcome to pastemonk! Use toolbar for accessing different options and features.",
    });
  } catch (error) {
    res.status(500).json({ message: "ERROR! Something went wrong." });
  }
};

/**
 * @route GET /api/v1/new
 * @description This function will help to create a new note/text
 * @access PUBLIC
 */
export const newNoteHandler = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};

/**
 * @route GET /api/v1/:id
 * @description This function will help to get any text/note
 * @access PUBLIC
 */

export const getNoteHandler = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};

/**
 * @route GET /api/v1/:id/duplicate
 * @description This function will help to create a duplicate note
 * @access PUBLIC
 */

export const makeDuplicateNoteHandler = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};

/**
 * @route POST /api/v1/save
 * @description This function will help to create/save a note/text
 * @access PUBLIC
 */

export const saveNoteHandler = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};
