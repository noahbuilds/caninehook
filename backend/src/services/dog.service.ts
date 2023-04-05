import { IDog } from "../models/interface/dog";
import { Dog } from "../models";

class DogService {
  public async createDog(reqBody: IDog, ownerId: string): Promise<any> {
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
  }

  public async getDogById(id: string) {
    let result = Dog.findById(id).populate("owner").exec();
    return result;
  }

  public async getDogs(): Promise<IDog[] | null> {
    let result = Dog.find({}).populate("owner").exec();
    return result;
  }

  public async deleteDog(dogId: string, userId: string) {
    let fetchedDog = await this.getDogById(dogId);
    if (fetchedDog && fetchedDog?.owner._id.equals(userId)) {
      let result = Dog.findByIdAndDelete(dogId);
      return result;
    }
    return null;
  }

  public async updateDogHookNumber(dogId: string): Promise<IDog | null> {
    let fetchedDog = await this.getDogById(dogId);
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
  }

  public async updateDogHookStatus(
    dogId: string,
    status: boolean,
    userId: string
  ) {
    let fetchedDog = await this.getDogById(dogId);
    if (fetchedDog && fetchedDog?.owner._id.equals(userId)) {
      let result = Dog.findByIdAndUpdate(
        { _id: dogId },
        { availableForHook: status }
      );
      return result;
    }
    return null;
  }

  public async updateDogHookPrice(
    dogId: string,
    hookPrice: number,
    userId: string
  ) {
    let fetchedDog = await this.getDogById(dogId);
    console.log(userId);
    if (fetchedDog && fetchedDog?.owner._id.equals(userId)) {
      let result = Dog.findByIdAndUpdate({ _id: dogId }, { price: hookPrice });
      return result;
    }

    return null;
  }
}

export { DogService };
