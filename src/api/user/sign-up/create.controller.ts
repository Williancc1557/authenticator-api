import { CreateJtw } from "../../../utils/jwt/index";
import { CreateUserService } from "src/database/repositories/user/create/create.service";
import { Body, Controller, HttpStatus, Post } from "@nestjs/common";
import { CreateUserDto } from "./create-user.dto";
import { log } from "src/utils/logger/log";

@Controller("sign-up")
export class CreateController {
    public constructor(
        public createUserService: CreateUserService
    ) { }

    @Post()
    public async createUser(@Body() body: CreateUserDto) {
        log.info(`${JSON.stringify(body)} << body`);

        await this.createUserService.create(body);

        log.info("user created");

        const token = new CreateJtw(body.email).create();

        return {
            statusCode: HttpStatus.CREATED,
            body: token,
        };
    }
}
