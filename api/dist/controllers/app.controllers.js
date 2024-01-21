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
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveNoteHandler = exports.makeDuplicateNoteHandler = exports.getNoteHandler = exports.newNoteHandler = exports.defaultRouteHandler = void 0;
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
 * @description This function will help to create a new note/text
 * @access PUBLIC
 */
const newNoteHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) { }
});
exports.newNoteHandler = newNoteHandler;
/**
 * @route GET /api/v1/:id
 * @description This function will help to get any text/note
 * @access PUBLIC
 */
const getNoteHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) { }
});
exports.getNoteHandler = getNoteHandler;
/**
 * @route GET /api/v1/:id/duplicate
 * @description This function will help to create a duplicate note
 * @access PUBLIC
 */
const makeDuplicateNoteHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) { }
});
exports.makeDuplicateNoteHandler = makeDuplicateNoteHandler;
/**
 * @route POST /api/v1/save
 * @description This function will help to create/save a note/text
 * @access PUBLIC
 */
const saveNoteHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) { }
});
exports.saveNoteHandler = saveNoteHandler;
