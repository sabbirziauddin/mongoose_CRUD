//interface for embeeded document/subdocument
export interface IAddress {
  city: string;
  street: string;
  zipCode: number;
}
export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: Number;
  role: "user" | "admin";
  address: IAddress;
  encryptPassword(): string;
}
