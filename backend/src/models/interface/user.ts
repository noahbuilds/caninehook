import { Gender } from "../enums/gender";

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    location: string;
    gender: Gender;
    dogs: [String];
  }