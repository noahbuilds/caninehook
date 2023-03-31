import { IDog } from "../models/interface/dog";
import { Dog } from "../models";

const dogService = {
  createDog: async (reqBody: IDog, ownerId: any): Promise<any> => {
    // console.log(reqBody)
    const {
      name,
      breed,
      image,
      availableForHook,
      numberOfHooks,
      gender,
      owner,
      price,
    } = reqBody;
    let createdDog = Dog.create({
      name,
      breed,
      image,
      availableForHook,
      numberOfHooks,
      gender,
      owner: ownerId,
      price,
    });
    return createdDog;
  },
  getDogById: async (id: string): Promise<IDog | null> => {
    let result = Dog.findById(id).populate("owner").exec();
    return result;
  },
  getDogs: async (): Promise<IDog[] | null> => {
    // let dogOwner = await Dog.find({}).populate("owner").exec()
    // console.log(dogOwner)
    let result = Dog.find({}).populate("owner").exec();
    return result;
  },
  deleteDog: async (dogId: string) => {
    let result = Dog.findByIdAndRemove(dogId);
    return result;
  },
  updateDogHookNumber: async (dogId: string): Promise<IDog | null> => {
    let fetchedDog = await dogService.getDogById(dogId);
    if (fetchedDog?.numberOfHooks) {
      let result = Dog.findByIdAndUpdate(
        { _id: dogId },
        { numberOfHooks: fetchedDog?.numberOfHooks + 1 }
      );
      //  let result= await Dog.updateOne({_id:dogId},{ "numberOfHooks": fetchedDog?.numberOfHooks + 1 } )
      //   console.log(result.acknowledged)
      return result;
    }
    return null;
  },
};

export { dogService };
