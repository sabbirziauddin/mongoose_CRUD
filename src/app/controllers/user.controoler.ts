// import bcrypt from "bcrypt";
import express, { Request, Response } from "express";
import { User } from "../models/user.mode";

export const userRoutes = express.Router();
//crate user
userRoutes.post("/create-user", async (req: Request, res: Response) => {
  //noteRoutesroach 1 to create post
  // const myNote = new Note({
  //   title: "New note for use1",
  //   content: "hello i am new note ",
  // });
  //await myNote.save();
  //another way to create post
  const body = req.body;
  // const byCryptPaswrd = await bcrypt.hash(body.password, 10);
  // req.body.password = byCryptPaswrd;
  // console.log(req.body.password);
  const user = new User(body);
  user.password = await user.encryptPassword();
  console.log(user);
  const createNewUser = await user.save();
  // const createNewUser = await User.create(body);
  res.status(201).json({
    success: true,
    message: "user create successfully",
    data: createNewUser,
  });
});
//get all user
userRoutes.get("/", async (req: Request, res: Response) => {
  const allUser = await User.find();
  res.status(201).json({
    success: true,
    message: "users fetch  successfully",
    data: allUser,
  });
});
//get single user
userRoutes.get("/:userId", async (req: Request, res: Response) => {
  const idUser = req.params.userId;
  const singleUser = await User.findById(idUser);
  res.status(200).json({
    success: true,
    message: "single user retrived successfully",
    data: singleUser,
  });
});
//update user
userRoutes.patch("/:userId", async (req: Request, res: Response) => {
  const idUser = req.params.userId;
  console.log(idUser);
  const updatUserData = req.body;
  const userUpdate = await User.findByIdAndUpdate(idUser, updatUserData, {
    new: true,
  });
  res.status(200).json({
    success: true,
    message: "updated successfully",
    data: userUpdate,
  });
});
//delete user
userRoutes.delete("/:userId", async (req: Request, res: Response) => {
  const idUser = req.params.userId;
  const deletedUser = await User.findByIdAndDelete(idUser, {
    new: true,
  });
  res.status(200).json({
    success: true,
    message: "user deleted  successfully",
    data: deletedUser,
  });
});
