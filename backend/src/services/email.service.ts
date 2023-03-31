import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "Gmail",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: "noah@brimble.app",
    pass: "noahbrimble",
  },
});

const emailService = {
  sendEmail: async (to: string, subject: string, text: string) => {
    const message = {
      from: "edetnoah@gmail.com",
      to: to,
      subject: subject,
      text: text,
    };
   return await transport.sendMail(message);
  },
};

export { emailService };
