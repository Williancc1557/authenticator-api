import { Body, Controller, Get, HttpStatus } from "@nestjs/common";
import { GetUserService } from "src/database/repositories/user/get/get.service";
import { GetUserDto } from "./get.dto";

@Controller("get")
export class GetUserController {
    public constructor(
        private readonly getUserService: GetUserService
    ) { }

    @Get("user")
    public async getUser(@Body() { email }: GetUserDto) {
        return {
            statusCode: HttpStatus.OK,
            body: await this.getUserService.get(email),
        };
    }
}
