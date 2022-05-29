import { Module } from "@nestjs/common";
import { CheckJwtService } from "src/utils/check-jwt/check-jwt.service";
import { IsValidTokenController } from "./is-valid-token.controller";


@Module({
    controllers: [IsValidTokenController],
    providers: [CheckJwtService],
})
export class IsValidTokenModule {

}
