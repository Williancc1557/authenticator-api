import { Controller, Get, HttpStatus, Param } from "@nestjs/common";
import { CheckJwtService } from "src/utils/check-jwt/check-jwt.service";
@Controller("is-valid-token")
export class IsValidTokenController {

    public constructor(
        private readonly checkTokenService: CheckJwtService
    ) { }

    @Get(":token")
    public async isValidToken(@Param("token") jwt: string) {
        const body = this.checkTokenService.check(jwt);

        return {
            statusCode: HttpStatus.OK,
            body,
        };
    }
}
