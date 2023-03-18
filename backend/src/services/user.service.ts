import { User } from "../models";
import { IUser } from "../models/interface/user";

const userService = {
  createUser: async (reqBody: IUser):Promise<IUser> => {
    console.log(reqBody)
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
    return User.create({
      firstName,
      lastName,
      email,
      password,
      dogs,
      gender,
      location,
      rating,
    });
  },
  getUserById: async (id: string): Promise<IUser | null> => {
    return User.findById(id);
  },
  getUsers: async (): Promise<IUser[] | null> => {
    return User.find({});
  },
  loginUser:async (reqBody:any) => {
    
  },
  logoutUser:async () => {
    
  }
};

export {
    userService
} 
