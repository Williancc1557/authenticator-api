import { GetUserController } from "./get.controller";
import { Module } from "@nestjs/common";
import { GetUserService } from "src/database/repositories/user/get/get.service";

@Module({
    controllers: [GetUserController],
    providers: [GetUserService],
})
export class GetModule { }
