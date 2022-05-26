import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contact.entity";

@Entity({ name: "user" })
export class UserEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @OneToOne(() => Contact, (contact) => contact.user, { cascade: true })
    @JoinColumn()
    public contact: Contact;

    @Column()
    public password: string;
}

