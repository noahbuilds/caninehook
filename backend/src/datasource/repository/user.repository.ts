import { IUser } from "../interface/user";
import { User } from "../models";

export class UserRepository {
  private readonly userDB = User;

  public create = async (user: IUser): Promise<IUser | null> => {
    let result = await this.userDB.create(user);
    return result;
  };
  public fetchUsers = async (): Promise<IUser[] | []> => {
    let result = await this.userDB.find({}).populate("dogs").exec();
    return result;
  };

  public fetchUser = async (userId: string): Promise<IUser | null> => {
    let result = await this.userDB.findById({ userId }).populate("dogs").exec();
    return result;
  };

  public update = async (
    userId: string,
    option: any
  ): Promise<IUser | null> => {
    let result = await this.userDB.findByIdAndUpdate({ _id: userId }, option);
    return result;
  };
  public delete = async (userId: string): Promise<IUser | null> => {
    let result = await this.userDB.findByIdAndDelete({ _id: userId });
    return result;
  };

  public findEmail = async (email: string): Promise<IUser | null> => {
    let result = await this.userDB.findOne({ email });
    return result;
  };
}
