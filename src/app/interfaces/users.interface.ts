export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: Number;
  role: "user" | "admin";
}