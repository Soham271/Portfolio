import mongoose from "mongoose";

let ContactSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true, // Optional: Ensures emails are unique
  },
  PhoneNumber: {
    type: String, // Changed from Number to String
    required: true,
  },
  Subject: {
    type: String,
  },
  Message: {
    type: String,
  },
});

const contactForm = mongoose.model("contactForm", ContactSchema);
export default contactForm;
