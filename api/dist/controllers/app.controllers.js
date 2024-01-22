"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveDocumentHandler = exports.makeDuplicateDocumentHandler = exports.getDocumentHandler = exports.newDocumentHandler = exports.defaultRouteHandler = void 0;
const app_models_1 = __importDefault(require("../models/app.models"));
/**
 * @route GET /api/v1
 * @description The function is for the default route
 * @access PUBLIC
 */
const defaultRouteHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            message: "Welcome to pastemonk! Use toolbar for accessing different options and features.",
        });
    }
    catch (error) {
        res.status(500).json({ message: "ERROR! Something went wrong." });
    }
});
exports.defaultRouteHandler = defaultRouteHandler;
/**
 * @route GET /api/v1/new
 * @description This function will help to create a new document
 * @access PUBLIC
 */
const newDocumentHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({ message: "new doc" });
    }
    catch (error) {
        res.status(500).json({ message: "ERROR! Something went wrong." });
    }
});
exports.newDocumentHandler = newDocumentHandler;
/**
 * @route GET /api/v1/:id
 * @description This function will help to get any document
 * @access PUBLIC
 */
const getDocumentHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Use req.params to get the URL parameters
    try {
        const document = yield app_models_1.default.findById(id);
        if (!document) {
            return res.status(404).json({ message: "Document not found." });
        }
        res.status(200).json({ document });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "ERROR! Something went wrong." });
    }
});
exports.getDocumentHandler = getDocumentHandler;
/**
 * @route GET /api/v1/:id/duplicate
 * @description This function will help to create a duplicate document
 * @access PUBLIC
 */
const makeDuplicateDocumentHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Retrieve the document ID from the URL parameters
    try {
        const originalDocument = yield app_models_1.default.findById(id);
        if (!originalDocument) {
            return res.status(404).json({ message: "Original document not found." });
        }
        const duplicatedDocument = new app_models_1.default({
            doc: originalDocument.doc,
        });
        yield duplicatedDocument.save();
        res.status(200).json({ duplicatedDocument });
    }
    catch (error) {
        res.status(500).json({ message: "ERROR! Something went wrong." });
    }
});
exports.makeDuplicateDocumentHandler = makeDuplicateDocumentHandler;
/**
 * @route POST /api/v1/save
 * @description This function will help to create/save a document
 * @access PUBLIC
 */
const saveDocumentHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { doc } = req.body;
    try {
        let document = new app_models_1.default({
            doc: doc,
        });
        yield document.save();
        // console.log(document);
        res.status(200).json({ document });
    }
    catch (error) {
        res.status(500).json({ message: "ERROR! Something went wrong." });
    }
});
exports.saveDocumentHandler = saveDocumentHandler;
