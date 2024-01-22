import { Request, Response } from "express";
import Document from "../models/app.models";

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
 * @description This function will help to create a new document
 * @access PUBLIC
 */
export const newDocumentHandler = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "new doc" });
  } catch (error) {
    res.status(500).json({ message: "ERROR! Something went wrong." });
  }
};

/**
 * @route GET /api/v1/:id
 * @description This function will help to get any document
 * @access PUBLIC
 */

export const getDocumentHandler = async (req: Request, res: Response) => {
  const { id } = req.params; // Use req.params to get the URL parameters
  try {
    const document = await Document.findById(id);
    if (!document) {
      return res.status(404).json({ message: "Document not found." });
    }
    res.status(200).json({ document });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "ERROR! Something went wrong." });
  }
};

/**
 * @route GET /api/v1/:id/duplicate
 * @description This function will help to create a duplicate document
 * @access PUBLIC
 */

export const makeDuplicateDocumentHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params; // Retrieve the document ID from the URL parameters

  try {
    const originalDocument = await Document.findById(id);

    if (!originalDocument) {
      return res.status(404).json({ message: "Original document not found." });
    }

    const duplicatedDocument = new Document({
      doc: originalDocument.doc,
    });

    await duplicatedDocument.save();

    res.status(200).json({ duplicatedDocument });
  } catch (error) {
    res.status(500).json({ message: "ERROR! Something went wrong." });
  }
};

/**
 * @route POST /api/v1/save
 * @description This function will help to create/save a document
 * @access PUBLIC
 */

export const saveDocumentHandler = async (req: Request, res: Response) => {
  const { doc } = req.body;
  try {
    let document = new Document({
      doc: doc,
    });
    await document.save();
    // console.log(document);
    res.status(200).json({ document });
  } catch (error) {
    res.status(500).json({ message: "ERROR! Something went wrong." });
  }
};
