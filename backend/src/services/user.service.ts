import { User } from "../models";
import { IUser } from "../models/interface/user";
import bcrypt from "bcrypt";

const userService = {
  createUser: async (reqBody: IUser) => {
    const { firstName, lastName, email, password, gender, location } = reqBody;

    let hashPassword = await bcrypt.hash(password, 10);
    return User.create({
      firstName,
      lastName,
      email,
      password: hashPassword,
      gender,
      location,
    });
  },

  emailExists: async (email: string): Promise<IUser | null> => {
    let result = await User.findOne({ email });

    return result;
  },

  getUserById: async (id: string): Promise<IUser | null> => {
    let result = User.findById(id);
    return result;
  },
  getUsers: async (): Promise<IUser[] | null> => {
    let result = User.find({}).populate("dogs").exec();
    return result;
  },

  addUserDog: async (id: string, dogId: string) => {
    let result = User.findByIdAndUpdate(
      { _id: id },
      { $push: { dogs: dogId } }
    );
    return result;
  },
};

export { userService };
