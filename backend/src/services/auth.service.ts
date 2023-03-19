import { User } from "../models";
import { IUser } from "../models/interface/user";

const authService = {
    // createUser: async (reqBody: IUser):Promise<IUser> => {
    //     const {
    //       firstName,
    //       lastName,
    //       email,
    //       password,
    //       dogs,
    //       gender,
    //       location,
    //       rating,
    //     } = reqBody;
       
    //     return User.create({
    //       firstName,
    //       lastName,
    //       email,
    //       password,
    //       dogs,
    //       gender,
    //       location,
    //       rating,
    //     });
    //   },
  loginUser: async (reqBody: any) => {
    const { email, password } = reqBody;
    let found = await User.findOne({ email: email });
    return found;
  },
  logoutUser: async () => {},
};

export { authService };
