import { IDog } from "../interface/dog";
import { Dog } from "../models";

export class DogRepository {
  private readonly dogDB = Dog;

  public create = async (dog: IDog): Promise<IDog | null> => {
    let result = await this.dogDB.create(dog);
    return result;
  };
  public fetchDogs = async (): Promise<IDog[] | []> => {
    let result = await this.dogDB.find({}).populate("owner").exec();;
    return result;
  };

  public fetchDog = async (dogId: string): Promise<IDog | null> => {
    let result = await this.dogDB.findById({ _id: dogId }).populate("owner").exec();;
    return result;
  };

  public update = async (dogId: string, option: any): Promise<IDog | null> => {
    let result = await this.dogDB.findByIdAndUpdate(
      { _id: dogId },
      option 
    );
    return result;
  };
  public delete = async (dogId: string): Promise<IDog | null> => {
    let result = await this.dogDB.findByIdAndDelete({ _id: dogId });
    return result;
  };
}
