// src/models/StudentQuery.ts

import mongoose, { Document, Schema, Model } from 'mongoose';

// 1. Interface for Document
export interface IStudentQuery extends Document {
  name: string;
  email: string;
  phone?: string;
  educationLevel: string;
  courseInterest: string[];
  currentSkills?: string;
  specificQuestions: string;
  preferredContactMethod: string;
  createdAt: Date;
}

// 2. Define the Mongoose Schema
const StudentQuerySchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: false },
  educationLevel: { type: String, required: true },
  courseInterest: { type: [String], required: true },
  currentSkills: { type: String, required: false },
  specificQuestions: { type: String, required: true },
  preferredContactMethod: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true }); // 'timestamps: true' 'createdAt' और 'updatedAt' को स्वचालित रूप से जोड़ता है

// 3. Export Model (Check if model exists before compiling)
// यह Next.js Hot Reloading के दौरान 'OverwriteModelError' से बचाता है।
const StudentQuery: Model<IStudentQuery> = 
  (mongoose.models.StudentQuery as Model<IStudentQuery>) 
  || mongoose.model<IStudentQuery>('StudentQuery', StudentQuerySchema);

export default StudentQuery;