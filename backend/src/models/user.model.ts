import mongoose from "mongoose";
import { Gender } from "./enums/gender";
import { IUser } from "./interface/user";
import bcrypt from 'bcrypt'

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

// userSchema.pre('save', async function (next) {
//   const user = this;
//   if (user.isModified('password')) {
//     user.password = await bcrypt.hash(user.password, 8);
//   }
//   next();
// });
  

const User = mongoose.model("User", userSchema);


export  {User}
