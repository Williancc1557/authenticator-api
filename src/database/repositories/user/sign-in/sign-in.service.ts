import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import type { SignInDto } from "src/api/user/sign-in/sign-in.dto";
import { postgresDataSource } from "src/database/data-souce";
import { Contact } from "src/database/entities/contact.entity";
import { UserEntity } from "src/database/entities/user.entity";
import { CreateJtw } from "src/utils/jwt";

@Injectable()
export class SignInService {
    public async signIn(body: SignInDto) {
        const contactRepository = postgresDataSource.getRepository(Contact);
        const userRepository = postgresDataSource.getRepository(UserEntity);

        const findContactByEmail = await contactRepository.findOne({
            where: {
                email: body.email,
            },
        });

        if (!findContactByEmail) {
            throw new HttpException("this user don't exists", HttpStatus.FORBIDDEN);
        }

        const user = await userRepository.findOne({
            relations: ["contact", "contact.verifyEmail"],
            where: {
                id: findContactByEmail.id,
            },
        });

        if (body.password != user.password) {
            throw new HttpException("invalid password", HttpStatus.FORBIDDEN);
        }

        return {
            ...new CreateJtw(body.email).create(),
            user,
        };
    }
}
