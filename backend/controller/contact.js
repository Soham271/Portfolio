import mongoose from "mongoose";
import { catchAsyncErr } from "../middleware/catchasyncErr.js";
import ErrorMiddleware from "../middleware/err.js";
import contactForm from "../model/contactmodel.js";
import nodemailer from "nodemailer";

import { sendEmail } from "./nodemail.js";

export const contactFormCreate = catchAsyncErr(async (req, res, next) => {
  console.log("📩 Received Body:", req.body);

  const { Name, Email, PhoneNumber, Subject, Message } = req.body;

  if (!Name || !Email || !PhoneNumber) {
    console.log(" Missing required fields!");
    return res.status(400).json({
      success: false,
      message: "All required fields must be provided.",
    });
  }

  try {
    // Save form data in the database
    const contact = await contactForm.create({
      Name,
      Email,
      PhoneNumber,
      Subject,
      Message,
    });

    console.log(" Contact Saved:", contact);

    // Send email notification
    await sendEmail({ Name, Email, PhoneNumber, Subject, Message });
    console.log(" Email Sent to Admin");

    res.status(200).json({ success: true, contact });
  } catch (error) {
    console.error(" Server Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export const getContactForm = catchAsyncErr(async (req, res, next) => {
  const contact = await contactForm.find();
  res.status(200).json({
    success: true,
    contact,
  });
});
