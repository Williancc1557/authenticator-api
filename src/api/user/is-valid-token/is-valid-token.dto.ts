import { IsJWT, IsDefined } from "class-validator";

export class IsValidTokenDto {
    @IsJWT()
    @IsDefined()
    public jwt: string;
}