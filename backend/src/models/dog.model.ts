import mongoose from "mongoose";
import { IDog } from "./interface/dog";
import { Gender } from "./enums/gender";

const dogSchema = new mongoose.Schema<IDog>({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  image: { type: [String], required: true },
  availableForHook: { type: Boolean, required: true },
  numberOfHooks: { type: Number, required: true },
  sex: { enum: Gender, required: true },
});
 export const Dog = mongoose.model("Dog", dogSchema);

module.exports={
Dog
} 
