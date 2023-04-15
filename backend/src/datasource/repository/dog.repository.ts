import { IDog } from "../interface/dog";
import { Dog } from "../models";

export class DogRepository {
  private readonly dogRepo = Dog;

  public create = async (user: IDog): Promise<IDog | null> => {
    let result = await this.dogRepo.create(user);
    return result;
  };
  public read = async (): Promise<IDog[] | []> => {
    let result = await this.dogRepo.find({});
    return result;
  };

  public readOne = async (userId: string): Promise<IDog | null> => {
    let result = await this.dogRepo.findById({ userId });
    return result;
  };

  public update = async (userId: string, option: any): Promise<IDog | null> => {
    let result = await this.dogRepo.findByIdAndUpdate(
      { _id: userId },
      { option }
    );
    return result;
  };
  public delete = async (userId: string): Promise<IDog | null> => {
    let result = await this.dogRepo.findByIdAndDelete({ _id: userId });
    return result;
  };
}
