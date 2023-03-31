import { ILogin, IUser } from "../models/interface/user";

import {userService, tokenService} from "./index"
import bcrypt from "bcrypt";


const authService = {
  loginUser: async (reqBody: ILogin): Promise<IUser | null> => {
    const { email, password } = reqBody;
    let foundUser = await userService.emailExists(email);

    if (foundUser != null) {
      let passwordMatch = await bcrypt.compare(password, foundUser?.password);
      if (passwordMatch) {
        tokenService.assignToken(foundUser)
        return foundUser;
      }
    }
    return null;
  },



  logoutUser: async () => {},
};

export { authService };
