import express from "express";
import { resolve } from "path";

import "./database";
import homeRoutes from "./routes/homeRoutes";
import studentRoutes from "./routes/studentRoutes";
import userRoutes from "./routes/userRoutes";
import tokenRoutes from "./routes/tokenRoutes";
import photoRoutes from "./routes/photoRoutes";

require("dotenv").config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, "..", "uploads", "images")));
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
