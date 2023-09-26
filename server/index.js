import "dotenv/config.js";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/apiRoutes.js";
import passport from "./passport/index.js";
import session from "express-session";

const mongoDB = process.env.MONGO_CONNECTION;
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

const app = express();
const PORT = process.env.PORT;

// Sessions
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Starting server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
