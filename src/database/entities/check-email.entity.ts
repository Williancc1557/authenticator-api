import { Column, Entity, Generated, PrimaryColumn } from "typeorm";

@Entity()
export class CheckEmail {
    @PrimaryColumn("int", { generated: true })
    public id: number;

    @Column({ unique: true })
    public email: string;

    @Column()
    @Generated("uuid")
    public token: string;

    @Column()
    public key: number;
}