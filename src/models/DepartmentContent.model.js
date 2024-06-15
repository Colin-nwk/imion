import mongoose from "mongoose";

const DepartmentContentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content_one: {
      type: String,
      required: true,
    },
    content_two: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const DepartmentContent = mongoose.model(
  "DepartmentContent",
  DepartmentContentSchema
);

export default DepartmentContent;

DepartmentContent;