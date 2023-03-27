import { IDog } from "../models/interface/dog";
import { Dog } from "../models";

const dogService =  {
    createDog: async (reqBody: IDog, ownerId: any ):Promise<any> => {
        // console.log(reqBody)
        const {
            name,
            breed,
            image,
            availableForHook,
            numberOfHooks,
            gender,
            owner,
            price
        } = reqBody;
        return Dog.create({
            name,
            breed,
            image,
            availableForHook,
            numberOfHooks,
            gender,
            owner: ownerId,
            price
        });
      },
      getDogById: async (id: string): Promise<IDog | null> => {
        return Dog.findById(id);
      },
      getDogs: async (): Promise<IDog[] | null> => {
        // let dogOwner = await Dog.find({}).populate("owner").exec()
        // console.log(dogOwner)
        return Dog.find({}).populate("owner").exec();
      },
}

export {
    dogService
}