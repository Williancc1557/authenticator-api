import { IsEmail, IsDefined, MaxLength, MinLength } from "class-validator";
export class SignInDto {
    @IsEmail()
    @IsDefined()
    public readonly email: string;

    @IsDefined()
    @MinLength(6) // eslint-disable-line
    @MaxLength(25) // eslint-disable-line
    public readonly password: string;
}