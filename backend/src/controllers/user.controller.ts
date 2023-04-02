import { Request, Response } from "express";
import { userService } from "../services/user.service";

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
  requestDogInspection: async (req: any, res: Response) => {
    let userId: string = req.user.userId as unknown as string;
    let dogId: string = req.params.dogId as unknown as string;
    let message: string = req.body.message
      ? req.body.message
      : "I will like to humbly request for an Inspection";
    // console.log(userId)
    // console.log(dogId)
    try {
      let result = await userService.requestDogInspection(
        userId,
        dogId,
        message
      );
      res.json({
        msg: result,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export { userController };
