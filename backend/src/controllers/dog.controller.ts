import { Request, Response } from "express";
import { IDog } from "../models/interface/dog";
import { dogService, userService } from "../services";

const dogController = {
  createDog: async (req: any, res: Response) => {
    try {
      let ownerId = req.user.userId;
      // console.log(req.user.email)
      //  get user fri
      if (ownerId) {
        console.log(ownerId);
        let result = await dogService.createDog(req.body, ownerId);
        let userDog = await userService.addUserDog(ownerId, result._id);
        console.log(userDog);
        return res.json(result);
      }
      return res.json({
        msg: "Please login to continue",
      });
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
  deleteDog: async (req: any, res: Response) => {
    let dogId: string = req.params.id;
    console.log(dogId);
    try {
      let result: IDog | null = await dogService.getDogById(dogId);
      // console.log(req.user.userId);
      // console.log(result);
      if (result && result?.owner._id.equals(req.user.userId)) {
        let deletedDog = await dogService.deleteDog(dogId);
        res.json({
          deletedDog: deletedDog,
          msg: "Dog deleted successfully",
        });
      } else {
        res.json({
          msg: "Dog doesn't exists",
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
  updateDogHookNumber: async (req: any, res: Response) => {
    let dogId = req.params.id;
    try {
      let result = await dogService.updateDogHookNumber(dogId);
      if(result){
        res.json({
          msg: result,
        });
      }
      else{
        res.json({
          msg: 'Dog does not exists'
        })
      }
      
    } catch (error) {
      console.log(error);
    }
  },
  
};

export { dogController };
