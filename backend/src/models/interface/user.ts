import { Types } from "mongoose";
import { Dog } from "../dog.model";

export interface IUser {
  _id: Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  location: string;
  gender: string;
  rating: number;
  token: string;
  dogs: typeof Dog;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ILogin {
  email: string;
  password: string;
}
