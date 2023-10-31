import mongoose from "mongoose";

medicalRecordSchema = new mongoose.Schema({}, {timestamps:true})

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema)

