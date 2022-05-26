import * as jwt from "jsonwebtoken";

export class CreateJtw {
    public constructor(
        private readonly email: string
    ) { }

    public create(): object {
        const expiresIn = "10h";

        const token = jwt.sign({ email: this.email }, process.env.JWT_PRIVATE, {
            expiresIn,
        });

        return {
            jwt: {
                token,
                expiresIn,
            },
        };
    }
}