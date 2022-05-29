import { Body, Controller, Get, HttpStatus } from "@nestjs/common";
import { CheckJwtService } from "src/utils/check-jwt/check-jwt.service";
import { IsValidTokenDto } from "./is-valid-token.dto";


@Controller("is-valid-token")
export class IsValidTokenController {

    public constructor(
        private readonly checkTokenService: CheckJwtService
    ) { }

    @Get()
    public async isValidToken(@Body() { jwt }: IsValidTokenDto) {
        const body = this.checkTokenService.check(jwt);

        return {
            statusCode: HttpStatus.OK,
            body,
        };
    }
}
