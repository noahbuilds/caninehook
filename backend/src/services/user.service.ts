import { User } from "../models";
import { IUser } from "../models/interface/user";
import bcrypt from "bcrypt";


const userService = {
  createUser: async (reqBody: IUser) => {
    const {
      firstName,
      lastName,
      email,
      password,
      dogs,
      gender,
      location,
      rating,
    } = reqBody;

    let hashPassword = await bcrypt.hash(password, 10);
    return User.create({
      firstName,
      lastName,
      email,
      password: hashPassword,
      dogs,
      gender,
      location,
      rating,
    });
  },

  emailExists: async (email: string): Promise<boolean> => {
    let result = await User.findOne({ email });
    if (result) {
      return true;
    }
    return false;
  },

  getUserById: async (id: string): Promise<IUser | null> => {
    return User.findById(id);
  },
  getUsers: async (): Promise<IUser[] | null> => {
    return User.find({});
  },
};

export { userService };
