import express from "express";
import dbconnect from "./Database/Database.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import contactRoute from "./router/contactRoute.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((req, res, next) => {
  console.log("📩 Middleware Body:", req.body);
  next();
});

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/v1", contactRoute);

app.get("/", (req, res) => {
  res.send("🚀 Server is running...");
});

const port = process.env.PORT || 3004;
dbconnect();

app.listen(port, () => {
  console.log(`✅ Server running at: http://localhost:${port}`);
});
