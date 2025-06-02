import express from "express";
import multer from "multer";
import { contactFormCreate, getContactForm } from "../controller/contact.js";

const router = express.Router();
const upload = multer();

router.post("/create", upload.none(), contactFormCreate);

export default router;
