import mongoose from "mongoose";
import { Gender } from "./enums/gender";
import { IUser } from "./interface/user";

const userSchema = new mongoose.Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true,unique: true, uppercase: false },
  password: { type: String, required: true },
  dogs: { type: [String] },
  gender: { type: String, enum: Gender, required: true },
  location: {type: String},
  rating: {type: Number},

},
{
  timestamps: true,
}
);

const User = mongoose.model("User", userSchema);

export  {User};
