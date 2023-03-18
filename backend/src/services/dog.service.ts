import { IDog } from "../models/interface/dog";
import { Dog } from "../models";

const dogService =  {
    createDog: async (reqBody: IDog):Promise<IDog> => {
        console.log(reqBody)
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
            owner,
            price
        });
      },
      getDogById: async (id: string): Promise<IDog | null> => {
        return Dog.findById(id);
      },
      getDogs: async (): Promise<IDog[] | null> => {
        return Dog.find({});
      },
}

export {
    dogService
}