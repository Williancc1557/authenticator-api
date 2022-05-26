import { Contact } from "src/database/entities/contact.entity";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import type { CreateUserDto } from "src/api/user/sign-up/create-user.dto";
import { UserEntity } from "src/database/entities/user.entity";
import { postgresDataSource } from "src/database/data-souce";
import { SendMail } from "src/utils/send-mail";
import { log } from "src/utils/logger/log";

@Injectable()
export class CreateUserService {
    public generateconfirmationToken(): number {
        let randomconfirmationToken = "";

        const LENGTH = 4;

        for (let i = 1; i <= LENGTH; i++) {
            randomconfirmationToken = randomconfirmationToken + Math.floor(Math.random() * (9 - 1 + 1) + 1); // eslint-disable-line
        }

        log.info(`generateconfirmationToken => ${randomconfirmationToken}`);

        return Number(randomconfirmationToken);
    }

    public async create(user: CreateUserDto): Promise<void> {
        const emailRepository = postgresDataSource.getRepository(Contact);

        if (await emailRepository.findOne({
            where: {
                email: user.email,
            },
        })) {
            throw new HttpException("User already exists", HttpStatus.CONFLICT);
        }

        const confirmationToken = this.generateconfirmationToken();

        const userRepository = postgresDataSource.getRepository(UserEntity);

        log.info("saving the user . . .");
        await userRepository.save({
            password: user.password,
            contact: {
                email: user.email,
                verifyEmail: {
                    confirmationToken,
                },
            },
        });

        await new SendMail(user.email).sendconfirmationTokenForCheckEmail(confirmationToken);
        log.info(`Email sended to ${user.email}`);
    }
}