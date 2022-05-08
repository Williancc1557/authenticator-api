import { IsString, IsEmail, IsDefined } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    @IsDefined()
    public readonly email: string;

    @IsString()
    @IsDefined()
    public readonly password: string;
}