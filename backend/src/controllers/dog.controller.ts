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

    try {
      // console.log(req.user.userId);
      // console.log(result);

      let deletedDog = await dogService.deleteDog(dogId, req.user.userId);
      if (deletedDog) {
        res.json({
          deletedDog: deletedDog,
          msg: "Dog deleted successfully",
        });
      } else {
        res.json({
          msg: "Dog doesn't exists or maybe youre not the owner",
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
      if (result) {
        res.json({
          msg: result,
        });
      } else {
        res.json({
          msg: "Dog does not exists",
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
  updateDogHookStatus: async (req: any, res: Response) => {
    let dogId = req.params.id;
    let isAvaibleForHook = req.params.status.toLocaleLowerCase();
    try {
      let result = await dogService.updateDogHookStatus(
        dogId,
        isAvaibleForHook as unknown as boolean,
        req.user.userId
      );
      if (result) {
        res.json({
          msg: result,
        });
      } else {
        res.json({
          msg: "Dog does not exists",
        });
      }
    } catch (error) {
      console.log(error);
    }
  },

  updateDogPrice: async (req: any, res: Response) => {
    let dogId = req.params.id;
    let price = req.body.price;
    console.log(price);
    try {
      // let result: IDog | null = await dogService.getDogById(dogId);
      // console.log(req.user.userId);
      // console.log(result);

      let updatedDogPrice = await dogService.updateDogHookPrice(
        dogId,
        price,
        req.user.userId
      );
      if (updatedDogPrice) {
        res.json({
          updatedDogPrice: updatedDogPrice,
          msg: "Dog price updated successfully",
        });
      } else {
        res.json({
          msg: "I dont think you are the owner of this dog or dog doesnt exists",
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
 
};

export { dogController };
