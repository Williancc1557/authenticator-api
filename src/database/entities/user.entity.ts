import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: "email" })
export class Email {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ unique: true })
    public email: string;

    @Column({ default: false })
    public isValid: boolean;

    @Column()
    public key: number;
}

@Entity({ name: "user" })
export class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @OneToOne(() => Email, { cascade: true })
    @JoinColumn()
    public email: Email;

    @Column()
    public password: string;
}