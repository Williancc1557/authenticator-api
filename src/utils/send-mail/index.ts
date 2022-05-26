import * as nodemailer from "nodemailer";
import { config } from "dotenv";
config();

interface Transporter {
    host: string;
    port: number;
    secure: boolean;
    auth: {
        user: string;
        pass: string;
    };
}

const transporterConfig: Transporter = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_EMAIL_PASSWORD,
    },
};

const transporter = nodemailer.createTransport(transporterConfig);

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