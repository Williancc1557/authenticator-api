import { CreateJtw } from "../../../utils/jwt/index";
import { isPassword } from "src/validations/is-password";
import { CreateUserService } from "src/database/repositories/user/create/create.service";
import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { CreateUserDto } from "./create-user.dto";
import { log } from "src/utils/logger/log";

@Controller("create")
export class CreateController {
    public constructor(
        public createUserService: CreateUserService
    ) { }

    @Post()
    public async createUser(@Body() body: CreateUserDto) {
        log.info(`${JSON.stringify(body)} << body`);

        if (!isPassword(body.password)) {
            throw new HttpException("Invalid password", HttpStatus.FORBIDDEN);
        }

        log.info(`valid password: ${body.password}`);

        await this.createUserService.create(body);

        log.info(`user created: ${body.password}`);

        const token = new CreateJtw(body.email).create();

        return {
            statusCode: HttpStatus.CREATED,
            body: token,
        };
    }
}
