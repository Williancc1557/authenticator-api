import { VerifyEmailEntity } from "./verify-email.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({ name: "contact" })
export class Contact {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ unique: true })
    public email: string;

    @OneToOne(() => VerifyEmailEntity, {
        cascade: true,
    })
    @JoinColumn()
    public verifyEmail: VerifyEmailEntity;

    @OneToOne(() => UserEntity, (user) => user.contact, {
        onDelete: "CASCADE",
    })
    public user: UserEntity;
}