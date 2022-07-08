import dotenv from "dotenv";
import express from "express";
import studentRoutes from "./src/routes/studentRoutes";
import userRoutes from "./src/routes/userRoutes";
import tokenRoutes from "./src/routes/tokenRoutes";
import "./src/database";

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", studentRoutes);
    this.app.use("/users", userRoutes);
    this.app.use("/tokens", tokenRoutes);
  }
}

export default new App().app;
