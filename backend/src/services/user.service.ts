import { User } from "../models";
import { IUser } from "../models/interface/user";
import bcrypt from "bcrypt";
import { emailService } from "./email.service";
import { dogService } from "./dog.service";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const userService = {
  createUser: async (reqBody: IUser) => {
    const { firstName, lastName, email, password, gender, location } = reqBody;

    let hashPassword = await bcrypt.hash(password, 10);
    return User.create({
      firstName,
      lastName,
      email,
      password: hashPassword,
      gender,
      location,
    });
  },

  emailExists: async (email: string): Promise<IUser | null> => {
    let result = await User.findOne({ email });

    return result;
  },

  getUserById: async (userId: string): Promise<IUser | null> => {
    let result = User.findById(userId).populate("dogs").exec();
    return result;
  },
  getUsers: async (): Promise<IUser[] | null> => {
    let result = User.find({}).populate("dogs").exec();
    return result;
  },

  addUserDog: async (userId: string, dogId: string) => {
    let result = User.findByIdAndUpdate(
      { _id: userId },
      { $push: { dogs: dogId } }
    );
    return result;
  },
  requestDogInspection: async (
    userId: string,
    dogId: string,
    message: string
  ): Promise<string | SMTPTransport.SentMessageInfo> => {
    let requestingUser = await userService.getUserById(userId);
    // console.log(requestingUser + "i am the resquestiin user")
    // if(message == ''){
    // let message = "I will like to humbly request for an Inspection";

    // }
    let fetchedDog = await dogService.getDogById(dogId);
    if (fetchedDog && requestingUser) {
      let result = emailService.sendEmail(
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
  },
};

export { userService };
