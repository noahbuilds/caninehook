import { Gender } from "../enums/gender";

export interface IDog {
  name: string;
  breed: string;
  image: string[];
  availableForHook: boolean;
  numberOfHooks: number;
  owner: string
  gender: string;
  price: string;
}
