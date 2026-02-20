import mongoose from "mongoose";

const NotesSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",  // <-- matches your User model name
      required: true
    },
    topic: {
      type: String,
      required: true
    },
    classLevel: String,
    examType: String,
    revisionMode: {
      type: Boolean,
      default: false
    },
    includeDiagram: Boolean,
    includeCharts: Boolean,
    content: {
      type: mongoose.Schema.Types.Mixed,
      required: true
    }
  },
  { timestamps: true }
);

const NotesModel = mongoose.model("Notes", NotesSchema); 
export default NotesModel;
