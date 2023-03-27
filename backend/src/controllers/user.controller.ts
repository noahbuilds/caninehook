import { Request, Response } from "express";
import {userService} from "../services/user.service";

const userController = {
 
    // createUser: async (req: Request, res: Response) => {
    //     try {
    //       let result = await userService.createUser(req.body);
    //       return res.json(result);
    //     } catch (error: any) {
    //       return res.json({
    //         msg: " Couldnt create user",
    //         err: error.message,
    //       });
    //     }
    //   },

  getUsers: async (req: any, res: Response) => {
    // let users = await User.find({});
    // return res.json({
    //   user: users,
    // });
    
    try {
      let result = await userService.getUsers();
      return res.json(result);
    } catch (error: any) {
      return res.json({
        msg: " Couldnt get users",
        err: error.message,
      });
    }
  },
  getUserById: async (req: Request, res: Response) => {
    let id: string = req.params.id;
    try {
      let result = await userService.getUserById(id);
      res.json({
        result,
      });
    } catch (error: any) {
      return res.json({
        msg: " Couldnt get user",
        err: error.message,
      });
    }
  },
};

export { userController };
