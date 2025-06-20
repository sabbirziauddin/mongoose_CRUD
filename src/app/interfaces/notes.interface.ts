import { Types } from "mongoose";

export interface INotes {
  title: string;
  content: string;
  catagory: "personal" | "work" | "study" | "other";
  pinned: boolean;
  tags: {
    label: string;
    color: string;
  };
  user: Types.ObjectId; //referencing user collection to note collection
}
