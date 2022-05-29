import { IsString, IsEmail, IsDefined, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    @IsDefined()
    public readonly email: string;

    @IsString()
    @IsDefined()
    @MinLength(6) // eslint-disable-line
    @MaxLength(25) // eslint-disable-line
    public readonly password: string;
}