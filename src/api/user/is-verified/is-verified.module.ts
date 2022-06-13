import { Module } from "@nestjs/common";
import { IsVerifiedService } from "src/database/repositories/user/is-verified/is-verified.service";
import { IsVerifiedController } from "./is-verified.controller";

@Module({
  controllers: [IsVerifiedController],
  providers: [IsVerifiedService],
})
export class IsVerifiedModule { }
