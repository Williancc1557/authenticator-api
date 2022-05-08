import { CreateUserService } from "src/database/repositories/user/create/create.service";
import { Module } from "@nestjs/common";
import { CreateController } from "./create.controller";

@Module({
    controllers: [CreateController],
    providers: [CreateUserService],
})
export class CreateModule { }
