import { Contact } from "./../../../entities/contact.entity";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { postgresDataSource } from "src/database/data-souce";
import { VerifyEmailEntity } from "src/database/entities/verify-email.entity";


interface CheckParams {
    email: string;
    confirmationToken: number;
}

@Injectable()
export class CheckValidEmailService {
    public async check({ email, confirmationToken }: CheckParams) {
        const contactRepository = postgresDataSource.getRepository(Contact);
        const verifyEmailRepository = postgresDataSource.getRepository(VerifyEmailEntity);

        const contact = await contactRepository.findOne({
            where: {
                email,
            },
        });

        if (!contact) {
            throw new HttpException("Email is not valid", HttpStatus.FORBIDDEN);
        }

        const userVerifyEmail = await verifyEmailRepository.findOne({
            where: {
                id: contact.id,
            },
        });

        if (userVerifyEmail.isVerified) {
            throw new HttpException("this email has already been verified ", HttpStatus.FORBIDDEN);
        }

        if (confirmationToken != userVerifyEmail.confirmationToken) {
            throw new HttpException("confirmationToken is not valid", HttpStatus.FORBIDDEN);
        }

        userVerifyEmail.isVerified = true;


        await verifyEmailRepository.save(userVerifyEmail);
    }
}
