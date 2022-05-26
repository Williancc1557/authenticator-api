import { IsDefined, IsEmail, IsNumber } from "class-validator";

export class CheckEmailDto {
    @IsEmail()
    @IsDefined()
    public email: string;

    @IsNumber()
    @IsDefined()
    public key: number;
}