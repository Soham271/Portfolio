import { catchAsyncErr } from "../middleware/catchasyncErr.js";

import contactForm from "../model/contactmodel.js";

import { sendEmail } from "./nodemail.js";

export const contactFormCreate = catchAsyncErr(async (req, res, next) => {
  console.log(" Received Body:", req.body);

  const { Name, Email, PhoneNumber, Subject, Message } = req.body;

  if (!Name || !Email || !PhoneNumber) {
    console.log(" Missing required fields!");
    return res.status(400).json({
      success: false,
      message: "All required fields must be provided.",
    });
  }

  try {
    const contact = await contactForm.create({
      Name,
      Email,
      PhoneNumber,
      Subject: Subject || "",
      Message: Message || "",
    });
    console.log(" Contact Saved:", contact);

    await sendEmail({ Name, Email, PhoneNumber, Subject, Message });
    console.log(" Email Sent to Admin");

    res.status(200).json({ success: true, contact });
  } catch (error) {
    if (error.code === 11000) {
      console.log(" Duplicate Email Error:", error.message);
      return res.status(400).json({
        success: false,
        message: "This email is already used. Please use a different email.",
      });
    }

    console.error(" Server Error:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
});

export const getContactForm = catchAsyncErr(async (req, res, next) => {
  const contact = await contactForm.find();
  res.status(200).json({
    success: true,
    contact,
  });
});
