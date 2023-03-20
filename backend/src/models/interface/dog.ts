import { Gender } from "../enums/gender";
import { Types } from "mongoose";

export interface IDog {
  name: string;
  breed: string;
  image: string[];
  availableForHook: boolean;
  numberOfHooks: number;
  owner: Types.ObjectId;
  gender: string;
  price: string;
}
