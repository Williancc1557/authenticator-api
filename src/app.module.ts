import { Module } from "@nestjs/common";
import { CreateModule } from "./api/user/sign-up/create.module";
import { CheckEmailModule } from "./api/user/check-email/check-email.module";
import { GetModule } from "./api/user/get/get.module";
import { IsValidTokenModule } from "./api/user/is-valid-token/is-valid-token.module";
import { SignInModule } from "./api/user/sign-in/sign-in.module";
import { IsVerifiedModule } from "./api/user/is-verified/is-verified.module";

@Module({
  imports: [
    CreateModule,
    CheckEmailModule,
    GetModule,
    IsValidTokenModule,
    SignInModule,
    IsVerifiedModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
