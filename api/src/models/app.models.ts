import mongoose from "mongoose";

export type DocumentType = {
  _id: string;
  doc: string;
};

const documentSchema = new mongoose.Schema({
  doc: {
    type: String,
    required: true,
  },
});

const Document = mongoose.model<DocumentType>("Document", documentSchema);
export default Document;
