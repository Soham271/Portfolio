import express from "express";
import dbconnect from "./Database/Database.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import contactRoute from "./router/contactRoute.js";
import bodyParser from "body-parser";
const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use((req, res, next) => {
  console.log("📩 Middleware Body:", req.body);
  next();
});

app.use("/api/v1", contactRoute);

const port = process.env.PORT || 3004;
dbconnect();

app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});
