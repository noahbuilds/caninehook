import { ILogin, IUser } from "../datasource/interface/user";

import { UserService, tokenService } from "./index";
import bcrypt from "bcrypt";
import { injectable } from "tsyringe";
@injectable()
class AuthService {
  constructor(private readonly userService: UserService) {}
  public loginUser = async (reqBody: ILogin): Promise<IUser | null> => {
    const { email, password } = reqBody;
    let foundUser = await this.userService.emailExists(email);

    if (foundUser != null) {
      let passwordMatch = await bcrypt.compare(password, foundUser?.password);
      if (passwordMatch) {
        tokenService.assignToken(foundUser);
        return foundUser;
      }
    }
    return null;
  };

  public logoutUser = async () => {};
}

export { AuthService };
