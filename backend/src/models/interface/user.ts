import { Gender } from "../enums/gender";

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    location: string;
    gender: string;
    dogs: [String];
    rating: number;
  }
  

  export interface ILogin{
    email: string;
    password: string
  }