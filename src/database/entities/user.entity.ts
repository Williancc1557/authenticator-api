import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ unique: true })
    public email: string;

    @Column()
    public password: string;

    @Column({ default: false, type: "boolean" })
    public isValidEmail = false;
}