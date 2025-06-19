import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/users.interface";
import validator, { isEmail } from "validator";

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (v) {
          // return /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(v);
          return isEmail(v);
        },
        message: (props) => `${props.value} is not a valid Email address!`,
      },
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      min: [20, "age should be minimum 20 got value {VALUE}"],
      max: 50,
    },
    role: {
      lowercase: true,
      type: String,
      enum: {
        values: ["user", "admin"],
        message: "{VALUE} is not supported",
      },
      default: "user",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export const User = model<IUser>("User",userSchema,'userDb');