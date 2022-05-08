import { CreateJtw } from "./../../../use-case/jwt/index";
import { isPassword } from "src/validations/is-password";
import { CreateUserService } from "src/database/repositories/user/create/create.service";
import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { CreateUserDto } from "./create-user.dto";

@Controller("create")
export class CreateController {
    public constructor(
        public createUserService: CreateUserService
    ) { }

    @Post()
    public async createUser(@Body() body: CreateUserDto) {
        if (!isPassword(body.password)) {
            throw new HttpException("Invalid password", HttpStatus.FORBIDDEN);
        }

        await this.createUserService.create(body);

        const token = new CreateJtw(body.email).create();

        return {
            statusCode: HttpStatus.CREATED,
            body: token,
        };
    }
}
