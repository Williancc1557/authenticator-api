import { IsJWT } from "class-validator";

export class IsValidTokenDto {
    @IsJWT()
    public jwt: string;
}