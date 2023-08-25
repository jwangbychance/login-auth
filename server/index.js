require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGO_CONNECTION;
console.log(mongoDB);

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
