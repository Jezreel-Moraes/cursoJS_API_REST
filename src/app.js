import express from "express";
import { resolve } from "path";
import cors from "cors";
import helmet from "helmet";

import "./database";
import homeRoutes from "./routes/homeRoutes";
import studentRoutes from "./routes/studentRoutes";
import userRoutes from "./routes/userRoutes";
import tokenRoutes from "./routes/tokenRoutes";
import photoRoutes from "./routes/photoRoutes";

require("dotenv").config();

// const whiteList = ["http://192.168.100.248:3000", "http://192.168.100.40:3001"];

// const corsOptions = {
//   origin: (origin, callback) => {
//     if (!origin || whiteList.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(
      "/images/",
      express.static(resolve(__dirname, "..", "uploads", "images"))
    );
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/students", studentRoutes);
    this.app.use("/users", userRoutes);
    this.app.use("/tokens", tokenRoutes);
    this.app.use("/photo", photoRoutes);
  }
}

export default new App().app;
