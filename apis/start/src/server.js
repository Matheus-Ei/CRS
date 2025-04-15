// Libraries
import "dotenv/config";
import express from "express";
import fs from "fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import morgan from "morgan";
import cors from "cors";
import { sequelize } from './config/postgres.js'

import { Routes } from "./routes/index.js";

const app = express();
const port = 5000;

const __dirname = dirname(fileURLToPath(import.meta.url));

const logStream = fs.createWriteStream(path.join(__dirname, "../app.log"), {
  flags: "a",
});

Routes(app);
app.use(morgan("combined", { stream: logStream }));

app.use(
  cors({
    origin(_, callback) {
      callback(null, true);
    },
  }),
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use(express.json());

app.listen(port, () => {
  console.clear();
  console.log(`Running in the port ${port}`);
});
