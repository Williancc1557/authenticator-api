import { Module } from "@nestjs/common";
import { SignInService } from "src/database/repositories/user/sign-in/sign-in.service";
import { SignInController } from "./sign-in.controller";

@Module({
  controllers: [SignInController],
  providers: [SignInService],
})
export class SignInModule { }
