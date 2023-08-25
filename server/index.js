import "dotenv/config.js";
import express from "express";
import path from "path";
import mongoose from "mongoose";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGO_CONNECTION;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
