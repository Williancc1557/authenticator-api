import { Module } from "@nestjs/common";
import { CreateModule } from "./api/user/sign-up/create.module";
import { CheckEmailModule } from "./api/user/check-email/check-email.module";
@Module({
  imports: [CreateModule, CheckEmailModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
