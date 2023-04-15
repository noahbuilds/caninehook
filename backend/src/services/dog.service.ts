import { Types } from "mongoose";
import { injectable } from "tsyringe";
import { IDog } from "../datasource/interface/dog";
import { IUser } from "../datasource/interface/user";
import { DogRepository } from "../datasource/repository";

@injectable()
class DogService {
  constructor(private readonly dogRepo: DogRepository) {}
  public async createDog(
    reqBody: IDog,
    ownerId: Types.ObjectId & IUser
  ): Promise<any> {
    reqBody.owner = ownerId;

    let createdDog = this.dogRepo.create(reqBody);
    return createdDog;
  }

  public async getDogById(id: string) {
    let result = this.dogRepo.fetchDog(id);
    return result;
  }

  public async getDogs(): Promise<IDog[] | null> {
    let result = this.dogRepo.fetchDogs();
    return result;
  }

  public async deleteDog(dogId: string, userId: string) {
    let fetchedDog = await this.getDogById(dogId);
    if (fetchedDog && fetchedDog?.owner._id.equals(userId)) {
      let result = this.dogRepo.delete(dogId);
      return result;
    }
    return null;
  }

  public async updateDogHookNumber(dogId: string): Promise<IDog | null> {
    let fetchedDog = await this.getDogById(dogId);
    if (fetchedDog?.numberOfHooks) {
      let result = this.dogRepo.update(dogId, {
        numberOfHooks: fetchedDog?.numberOfHooks + 1,
      });

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
      let result = this.dogRepo.update(dogId, { availableForHook: status });
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
      let result = this.dogRepo.update(dogId, { price: hookPrice });
      return result;
    }

    return null;
  }
}

export { DogService };
