import express, { Request, Response } from 'express';
import { Note } from '../models/notes.model';

export const noteRoutes = express.Router();

//create a new note
noteRoutes.post("/create-note", async (req: Request, res: Response) => {
  //noteRoutesroach 1 to create post
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
noteRoutes.get("/", async (req: Request, res: Response) => {
  const myNote = await Note.find();
  res.status(201).json({
    success: true,
    message: "note create successfully",
    data: myNote,
  });
});

//get single note
noteRoutes.get("/:nodeId", async (req: Request, res: Response) => {
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
noteRoutes.patch("/:noteId", async (req: Request, res: Response) => {
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
noteRoutes.delete("/:noteId", async (req: Request, res: Response) => {
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
