import nodemailer from "nodemailer";
import configuration from "../configs/configs";

const transport = nodemailer.createTransport({
  service: "Gmail",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: configuration.USER_EMAIL,
    pass: configuration.EMAIL_PASSWORD,
  },
});

const emailService = {
  sendEmail: async (to: string, subject: string, text: string, from: string) => {
    const message = {
      from: from,
      to: to,
      subject: subject,
      text: text,
    };
   return await transport.sendMail(message);
  },
};

export { emailService };
