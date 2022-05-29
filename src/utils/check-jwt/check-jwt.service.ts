import * as jwt from "jsonwebtoken";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { config } from "dotenv";
config();

@Injectable()
export class CheckJwtService {
    public check(token: string) {
        try {
            return jwt.verify(token, process.env.JWT_PRIVATE);
        } catch (err) {
            throw new HttpException("invalid jwt", HttpStatus.FORBIDDEN);
        }
    }
}
