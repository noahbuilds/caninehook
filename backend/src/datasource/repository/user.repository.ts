import { IUser } from "../interface/user";
import { User } from "../models";

export class UserRepository {
  private readonly userDB = User;

  public create = async (user: IUser): Promise<IUser | null> => {
    let result = await this.userDB.create(user);
    return result;
  };
  public read = async (): Promise<IUser[] | []> => {
    let result = await this.userDB.find({});
    return result;
  };

  public readOne = async (userId: string): Promise<IUser | null> => {
    let result = await this.userDB.findById({ userId });
    return result;
  };

  public update = async (
    userId: string,
    option: any
  ): Promise<IUser | null> => {
    let result = await this.userDB.findByIdAndUpdate(
      { _id: userId },
      { option }
    );
    return result;
  };
  public delete = async (userId: string): Promise<IUser | null> => {
    let result = await this.userDB.findByIdAndDelete({ _id: userId });
    return result;
  };
}
