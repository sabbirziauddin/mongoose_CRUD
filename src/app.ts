import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";
import { Note } from "./app/models/notes.model";
import { noteRoutes } from "./app/controllers/notes.controller";
import { userRoutes } from "./app/controllers/user.controoler";
const app: Application = express();
const port = 3000;

//middleware
app.use(express.json());

app.use("/notes", noteRoutes);
app.use("/user", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Note App");
});

export default app;
