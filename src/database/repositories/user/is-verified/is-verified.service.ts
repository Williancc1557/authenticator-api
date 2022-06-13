import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { postgresDataSource } from "src/database/data-souce";
import { Contact } from "src/database/entities/contact.entity";
import { VerifyEmailEntity } from "src/database/entities/verify-email.entity";

@Injectable()
export class IsVerifiedService {
    public async isVerified(email: string): Promise<boolean> {
        const contactRepository = postgresDataSource.getRepository(Contact);

        const findContactByEmail = await contactRepository.findOne({
            where: {
                email,
            },
        });

        const verifyEmailRepository = postgresDataSource.getRepository(VerifyEmailEntity);

        const findVerifyEmailById = await verifyEmailRepository.findOne({
            where: {
                id: findContactByEmail.id,
            },
        });

        if (!findVerifyEmailById) {
            throw new HttpException("User dont exists", HttpStatus.FORBIDDEN);
        }

        return findVerifyEmailById.isVerified;
    }
}
