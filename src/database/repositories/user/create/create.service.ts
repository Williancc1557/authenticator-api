import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import type { CreateUserDto } from "src/api/user/sign-up/create-user.dto";
import { User, Email } from "src/database/entities/user.entity";
import { postgresDataSource } from "src/database/data-souce";
import { SendMail } from "src/utils/send-mail";
import { log } from "src/utils/logger/log";

@Injectable()
export class CreateUserService {
    public generateKey(): number {
        let randomKey = "";

        const LENGTH = 4;

        for (let i = 1; i <= LENGTH; i++) {
            randomKey = randomKey + Math.floor(Math.random() * (9 - 1 + 1) + 1); // eslint-disable-line
        }

        log.info(`generateKey => ${randomKey}`);

        return Number(randomKey);
    }

    public async create(user: CreateUserDto): Promise<void> {
        const emailRepository = postgresDataSource.getRepository(Email);

        if (await emailRepository.findOne({
            where: {
                email: user.email,
            },
        })) {
            throw new HttpException("User already exists", HttpStatus.CONFLICT);
        }

        const key = this.generateKey();

        const userRepository = postgresDataSource.getRepository(User);

        await userRepository.save({
            password: user.password,
            email: {
                email: user.email,
                key,
            },
        });

        await new SendMail(user.email).sendKeyForCheckEmail(key);
        log.info(`Email sended to ${user.email}`);
    }
}