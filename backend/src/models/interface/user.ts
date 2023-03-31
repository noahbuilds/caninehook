import { Dog } from "../dog.model";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  location: string;
  gender: string;
  rating: number;
  token: string;
  dogs: typeof Dog;
  phoneNumber: string
}

export interface ILogin {
  email: string;
  password: string;
}
