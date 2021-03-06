import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { postgresDataSource } from "src/database/data-souce";
import { Contact } from "src/database/entities/contact.entity";
import { UserEntity } from "src/database/entities/user.entity";

@Injectable()
export class GetUserService {
    public async get(email: string): Promise<UserEntity> {
        const contactRepository = postgresDataSource.getRepository(Contact);

        const findContactByEmail = await contactRepository.findOne({
            where: {
                email,
            },
        });

        const userRepository = postgresDataSource.getRepository(UserEntity);

        const findUserById = await userRepository.findOne({
            relations: ["contact"],
            where: {
                id: findContactByEmail.id,
            },
        });

        if (!findUserById) {
            throw new HttpException("User dont exists", HttpStatus.FORBIDDEN);
        }

        return findUserById;
    }
}