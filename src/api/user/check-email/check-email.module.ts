import { CheckEmailController } from "./check-email.controller";
import { Module } from "@nestjs/common";
import { CheckValidEmailService } from "src/database/repositories/user/check-valid-email/check-valid-email.service";
@Module({
    controllers: [CheckEmailController],
    providers: [CheckValidEmailService],
})
export class CheckEmailModule { }
