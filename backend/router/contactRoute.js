import express from "express";
import multer from "multer";
import { contactFormCreate, getContactForm } from "../controller/contact.js"; // ✅ Fixed function name

const router = express.Router();
const upload = multer();

router.post("/create", upload.none(), contactFormCreate); // ✅ Now correctly referenced
router.get("/get", getContactForm);

export default router;
