import { IsEmail } from "class-validator";

export class GetUserDto {
    @IsEmail()
    public email: string;
}