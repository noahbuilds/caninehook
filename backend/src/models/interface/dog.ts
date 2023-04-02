import { Gender } from "../enums/gender";
import {  Types } from "mongoose";
import { IUser } from "./user";

export interface IDog {
  _id: Types.ObjectId;
  name: string;
  breed: string;
  image: string[];
  availableForHook: boolean;
  numberOfHooks: number;
  owner: Types.ObjectId & IUser;
  gender: string;
  price: number;
  createdAt: Date
  updatedAt: Date
}

