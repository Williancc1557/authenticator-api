import { CheckValidEmailService } from "src/database/repositories/user/check-valid-email/check-valid-email.service";
import { Body, Controller, HttpCode, HttpStatus, Patch } from "@nestjs/common";
import { CheckEmailDto } from "./check-email.dto";

@Controller("check-email")
export class CheckEmailController {
    public constructor(
        private readonly checkEmailService: CheckValidEmailService
    ) { }

    @Patch()
    @HttpCode(HttpStatus.ACCEPTED)
    public async create(@Body() { email, confirmationToken }: CheckEmailDto) {
        await this.checkEmailService.check({
            email,
            confirmationToken,
        });

        return {
            statusCode: HttpStatus.ACCEPTED,
            body: [],
        };
    }
}
