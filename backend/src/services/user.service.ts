import { User } from "../datasource/models";
import { IUser } from "../datasource/interface/user";
import bcrypt from "bcrypt";
import { EmailService } from "./email.service";
import { DogService } from "./dog.service";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { injectable } from "tsyringe";
import { UserRepository } from "../datasource/repository";

@injectable()
class UserService {
  constructor(
    private readonly dogService: DogService,
    private readonly emailService: EmailService,
    private readonly userRepo: UserRepository
  ) {}
  public async createUser(reqBody: IUser) {
    const { firstName, lastName, email, password, gender, location } = reqBody;

    let hashPassword = await bcrypt.hash(password, 10);
    reqBody.password = hashPassword
    let result = this.userRepo.create(reqBody)
   return result;
  }

  public async emailExists(email: string): Promise<IUser | null> {
    let result = await User.findOne({ email });

    return result;
  }

  public async getUserById(userId: string): Promise<IUser | null> {
    let result = User.findById(userId).populate("dogs").exec();
    return result;
  }
  public async getUsers(): Promise<IUser[] | null> {
    let result = User.find({}).populate("dogs").exec();
    return result;
  }

  public async addUserDog(userId: string, dogId: string) {
    let result = User.findByIdAndUpdate(
      { _id: userId },
      { $push: { dogs: dogId } }
    );
    return result;
  }
  public async requestDogInspection(
    userId: string,
    dogId: string,
    message: string
  ): Promise<string | SMTPTransport.SentMessageInfo> {
    let requestingUser = await this.getUserById(userId);
    // console.log(requestingUser + "i am the resquestiin user")
    // if(message == ''){
    // let message = "I will like to humbly request for an Inspection";

    // }
    let fetchedDog = await this.dogService.getDogById(dogId);
    if (fetchedDog && requestingUser) {
      let result = this.emailService.sendEmail(
        fetchedDog.owner.email,
        `DOG HOUSE🐶: Request for ${fetchedDog.name} Inspection`,
        message,
        requestingUser.email
      );
      return result;
    }

    if (!fetchedDog) {
      return "couldnt find dog";
    }

    return "Couldnt find user requesting for inspection";
  }
}
export { UserService };
