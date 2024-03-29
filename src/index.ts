import { config } from "dotenv";
import nodemailer from "nodemailer";
config();
const SUBJECT = "";
const TEXT = "";
const users: string[] = [];
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_SMTP_PASSWORD,
  },
});

async function main() {
  try {
    const mails = [];
    for (const user of users) {
      const mail = transporter.sendMail({
        from: process.env.EMAIL_FROM, //
        to: user,
        subject: SUBJECT, // Subject line
        text: TEXT, // plain text body
      });
      mails.push(mail);
    }
    await Promise.allSettled(mails);
    console.log("Sent email to all users");
  } catch (error) {
    console.log(error);
  }
}

main();
