import type { User } from "src/database/entities/user.entity";

/* eslint-disable */

interface userMockParams {
    id: number;
    email: {
        id: number;
        email: string;
        isValid: boolean;
        key: number;
    };
    password: string;
}

export const userMock = (params?: userMockParams): User => ({
    id: params.id || 1,
    email: params.email || {
        id: params.email.id || 1,
        email: params.email.email || "alexandreaugusto123@gmail.com",
        isValid: params.email.isValid || false,
        key: params.email.key || 1234,
    },
    password: params.password || "Alexandre123",
});