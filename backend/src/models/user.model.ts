import mongoose from "mongoose";
import { Gender } from "./enums/gender";
import { IUser } from "./interface/user";

const userSchema = new mongoose.Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  dogs: { type: [String] },
  gender: { enum: Gender, required: true },
});

export const User = mongoose.model("User", userSchema);

module.exports = User;
