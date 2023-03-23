import { Request, Response } from "express";

import { authService, userService, tokenService } from "../services";

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
      let token =  tokenService.assignToken(result)
      console.log(token)
      return res.json(result);
    } catch (error: any) {
      return res.json({
        msg: "Couldnt create user",
        err: error.message,
      });
    }
  },
  loginUser: async (req: Request, res: Response) => {
    try {
      let result = await authService.loginUser(req.body);
      if (result) {
        let userToken = tokenService.assignToken(result);
        res.set('auth-token', userToken)
        // console.log(userToken)
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
