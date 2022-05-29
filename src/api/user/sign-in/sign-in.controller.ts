import { Body, Controller, Get, HttpStatus } from "@nestjs/common";
import { SignInService } from "src/database/repositories/user/sign-in/sign-in.service";
import { SignInDto } from "./sign-in.dto";

@Controller("sign-in")
export class SignInController {
    public constructor(
        private readonly signInService: SignInService
    ) { }

    @Get()
    public async signIn(@Body() body: SignInDto) {
        const resp = await this.signInService.signIn(body);

        return {
            statusCode: HttpStatus.OK,
            body: { ...resp },
        };
    }
}
