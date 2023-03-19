import { ILogin, IUser } from "../models/interface/user";
import { userService } from "./user.service";
import bcrypt from "bcrypt";

const authService = {
  loginUser: async (reqBody: ILogin): Promise<IUser | null> => {
    const { email, password } = reqBody;
    let foundEmail = await userService.emailExists(email);

    if (foundEmail != null) {
      let passwordMatch = await bcrypt.compare(password, foundEmail?.password);
      if (passwordMatch) {
        return foundEmail;
      }
    }
    return null;
  },

  logoutUser: async () => {},
};

export { authService };
