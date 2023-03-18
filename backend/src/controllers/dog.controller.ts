import { Request, Response } from "express";
import { dogService } from "../services";

const dogController = {
  createDog: async (req: Request, res: Response) => {
    try {
      let result = await dogService.createDog(req.body);
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
        msg: " Couldnt get users",
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
