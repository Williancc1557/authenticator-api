import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contact.entity";

@Entity({ name: "verify_email" })
export class VerifyEmailEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ default: false })
    public isVerified: boolean;

    @Column()
    public confirmationToken: number;

    @OneToOne(() => Contact, (contact) => contact.verifyEmail)
    public contact: Contact;
}