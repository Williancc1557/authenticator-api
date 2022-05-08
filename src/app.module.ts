import { Module } from "@nestjs/common";
import { CreateModule } from "./api/user/sign-up/create.module";

@Module({
  imports: [CreateModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
