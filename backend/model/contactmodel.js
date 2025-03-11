import mongoose from "mongoose";

let ContactSchema = new mongoose.Schema({
  
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  PhoneNumber: {
    type: Number, 
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
