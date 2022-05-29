import { Contact } from "./../../../entities/contact.entity";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { postgresDataSource } from "src/database/data-souce";

interface CheckParams {
    email: string;
    confirmationToken: number;
}

@Injectable()
export class CheckValidEmailService {
    public async check({ email, confirmationToken }: CheckParams) {
        const contactRepository = postgresDataSource.getRepository(Contact);

        const contact = await contactRepository.findOne({
            relations: ["verifyEmail"],
            where: {
                email,
            },
        });

        if (!contact) {
            throw new HttpException("Email is not valid", HttpStatus.FORBIDDEN);
        }


        if (contact.verifyEmail.isVerified) {
            throw new HttpException("this email has already been verified ", HttpStatus.FORBIDDEN);
        }

        if (confirmationToken != contact.verifyEmail.confirmationToken) {
            throw new HttpException("confirmationToken is not valid", HttpStatus.FORBIDDEN);
        }

        contact.verifyEmail.isVerified = true;


        await contactRepository.save(contact);
    }
}
