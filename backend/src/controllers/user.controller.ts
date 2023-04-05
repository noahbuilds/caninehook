import { Request, Response } from "express";
import { UserService } from "../services/user.service";

class UserController {
  private userService = new UserService();
  public async getUsers(req: any, res: Response) {
    // let users = await User.find({});
    // return res.json({
    //   user: users,
    // });

    try {
      let result = await this.userService.getUsers();
      return res.json(result);
    } catch (error: any) {
      return res.json({
        msg: " Couldnt get users",
        err: error.message,
      });
    }
  }
  public async getUserById(req: Request, res: Response) {
    let id: string = req.params.id;
    try {
      let result = await this.userService.getUserById(id);
      res.json({
        result,
      });
    } catch (error: any) {
      return res.json({
        msg: " Couldnt get user",
        err: error.message,
      });
    }
  }
  public async requestDogInspection(req: any, res: Response) {
    let userId: string = req.user.userId as unknown as string;
    let dogId: string = req.params.dogId as unknown as string;
    let message: string = req.body.message
      ? req.body.message
      : "I will like to humbly request for an Inspection";
    // console.log(userId)
    // console.log(dogId)
    try {
      let result = await this.userService.requestDogInspection(
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
  }
}

export { UserController };
