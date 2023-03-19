import { Request, Response } from "express";
import { authService, userService } from "../services";
import { IUser } from "../models/interface/user";
import { User } from "../models";
import bcrypt from "bcrypt";

const authController = {
  createUser: async (req: Request, res: Response) => {
    try {
      let alreadyExist = await userService.emailExists(req.body.email);
      if (alreadyExist) {
        return res.json({
          msg: "Email has already been taken",
        });
      }
      let result = await userService.createUser(req.body);
      return res.json(result);
    } catch (error: any) {
      return res.json({
        msg: " Couldnt create user",
        err: error.message,
      });
    }
  },
  loginUser: async (req: Request, res: Response) => {
    try {
      let result = await authService.loginUser(req.body);
      if (result) {
        return res.json(result);
      }
      return res.json({
        msg: "username or password is incorrect",
        login: false,
      });
    } catch (error: any) {
      return res.json({
        msg: " Couldnt log  user in",
        err: error.message,
      });
    }
  },
};

export { authController };
