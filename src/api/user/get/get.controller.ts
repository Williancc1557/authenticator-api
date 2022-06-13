import { Controller, Get, HttpStatus, Param } from "@nestjs/common";
import { GetUserService } from "src/database/repositories/user/get/get.service";


@Controller("get")
export class GetUserController {
    public constructor(
        private readonly getUserService: GetUserService
    ) { }

    @Get("user/:email")
    public async getUser(@Param("email") email: string) {
        try {
            const req = await this.getUserService.get(email);

            return {
                statusCode: HttpStatus.OK,
                body: req,
            };
        } catch (err) {
            return {
                statusCode: HttpStatus.FORBIDDEN,
                body: [],
            };
        }
    }
}
