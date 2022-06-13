import { Controller, Get, HttpStatus, Param } from "@nestjs/common";
import { IsVerifiedService } from "src/database/repositories/user/is-verified/is-verified.service";

@Controller("is-verified")
export class IsVerifiedController {
    public constructor(
        private readonly isVerifiedService: IsVerifiedService
    ) { }

    @Get(":email")
    public async isVerifiedUser(@Param("email") email: string) {
        const isVerified: boolean = await this.isVerifiedService.isVerified(email);

        return {
            statusCode: HttpStatus.OK,
            body: isVerified,
        };
    }
}
