import nodemailer from "nodemailer";

const transport = nodemailer.createTransport();

const emailService = {
  sendEmail: async (to: string, subject: string, text: string) => {
    const message = {
      from: "edetnoah@gmail.com",
      to: to,
      subject: subject,
      text: text,
    };
    await transport.sendMail(message);
  },
};

export { emailService };
