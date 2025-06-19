import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";
const app: Application = express();
const port = 3000;

//middleware
app.use(express.json());

//create schema
const noteSchema = new Schema(
  {
    title: { type: String, require: true, Trim: true },
    content: { type: String, default: "" },
    catagory: {
      type: String,
      enum: ["personal", "work", "study", "other"],
      default: "personal",
    },
    pinned: {
      type: Boolean,
      default: false,
    },
    tags: {
      label: { type: String, require: true },
      color: { type: String, default: "gray" },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//create Model
const Note = model("Note", noteSchema);

//create a new note
app.post("/notes/create-note", async (req: Request, res: Response) => {
  //approach 1 to create post
  // const myNote = new Note({
  //   title: "New note for use1",
  //   content: "hello i am new note ",
  // });
  //await myNote.save();
  //another way to create post
  const body = req.body;
  console.log(body);
  const myNote = await Note.create(body);
  res.status(201).json({
    success: true,
    message: "note create successfully",
    data: myNote,
  });
});
//get all notes
app.get("/notes", async (req: Request, res: Response) => {
  const myNote = await Note.find();
  res.status(201).json({
    success: true,
    message: "note create successfully",
    data: myNote,
  });
});

//get single note
app.get("/notes/:nodeId", async (req: Request, res: Response) => {
  const singleNote = req.params.nodeId;
  console.log(singleNote);
  const myNote = await Note.findById(singleNote);
  res.status(201).json({
    success: true,
    message: "note create successfully",
    data: myNote,
  });
});
//update a note
app.patch("/notes/:noteId", async (req: Request, res: Response) => {
  const singleNote = req.params.noteId;
  const updateNote = req.body;
  const myNote = await Note.findByIdAndUpdate(singleNote, updateNote, {
    new: true,
  });
  res.status(201).json({
    success: true,
    message: "note updated successfully",
    data: myNote,
  });
});
//delete note
app.delete("/notes/:noteId", async (req: Request, res: Response) => {
  const singleNote = req.params.noteId;
  const myNote = await Note.findByIdAndDelete(singleNote, {
    new: true,
  });
  res.status(201).json({
    success: true,
    message: "note deleted  successfully",
    data: myNote,
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Note App");
});

export default app;
