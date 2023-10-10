import "dotenv/config";
import express, {Request, Response, Express, NextFunction} from "express";
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";
import router from "./src/routes/apiRoutes";
import passport from "./src/passport/index";
import session from "express-session";

const mongoDB = process.env.MONGO_CONNECTION;
mongoose.connect(mongoDB!, { useUnifiedTopology: true, useNewUrlParser: true } as ConnectOptions);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

const app:Express = express();
const PORT = process.env.PORT;

// Sessions
app.use(
  session({
    secret: process.env.SESSION_SECRET!,
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

app.use((err:any, req:Request, res:Response, next:NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Starting server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
