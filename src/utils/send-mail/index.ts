import * as nodemailer from "nodemailer";
import { config } from "dotenv";
config();

const transporter = nodemailer.createTransport({
    host: "smtp.umbler.com",
    port: 587,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_EMAIL_PASSWORD,
    },
});

export class SendMail {
    public constructor(
        private readonly to: string
    ) { }

    public async sendconfirmationTokenForCheckEmail(confirmationToken: number) {
        return transporter.sendMail({
            to: this.to,
            subject: `Your code for check email is ${confirmationToken}`,
            text: `Use the code ${confirmationToken} for check your email`,
        });
    }
}