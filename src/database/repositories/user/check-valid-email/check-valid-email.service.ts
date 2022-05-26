import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { postgresDataSource } from "src/database/data-souce";
import { Email } from "src/database/entities/user.entity";


interface CheckParams {
    email: string;
    key: number;
}

@Injectable()
export class CheckValidEmailService {
    public async check({ email, key }: CheckParams) {
        const userRepository = postgresDataSource.getRepository(Email);

        const user = await userRepository.findOne({
            where: {
                email,
            },
        });

        if (key != user.key) {
            throw new HttpException("Key is not valid", HttpStatus.FORBIDDEN);
        }

        user.isValid = true;

        await userRepository.save(user);
    }
}
