import { Request, Response } from "express";
import { dogService, userService } from "../services";

const dogController = {
  createDog: async (req: any, res: Response) => {
    try {
      let ownerId = req.params.ownerId
      //  get user fri
      console.log(ownerId)
      let result = await dogService.createDog(req.body, ownerId);
      let updateUser = await userService.updateUser(ownerId, result._id)
      console.log(updateUser)
      return res.json(result);
    } catch (error: any) {
      return res.json({
        msg: " Couldnt create dog",
        err: error.message,
      });
    }
  },

  getDogs: async (req: Request, res: Response) => {
    // let users = await User.find({});
    // return res.json({
    //   user: users,
    // });
    try {
      let result = await dogService.getDogs();
      return res.json(result);
    } catch (error: any) {
      return res.json({
        msg: "Couldnt get dogs",
        err: error.message,
      });
    }
  },
  getDogById: async (req: Request, res: Response) => {
    let id: string = req.params.id;
    try {
      let result = await dogService.getDogById(id);
      res.json({
        result,
      });
    } catch (error: any) {
      return res.json({
        msg: " Couldnt get Dog",
        err: error.message,
      });
    }
  },
};

export { dogController };
