import { Contact } from "src/database/entities/contact.entity";
import { DataSource } from "typeorm";
import { UserEntity } from "../entities/user.entity";
import { config } from "dotenv";
import { log } from "src/utils/logger/log";
import { VerifyEmailEntity } from "../entities/verify-email.entity";
config();

export const postgresDataSource = new DataSource({
    type: "postgres",
    host: "motty.db.elephantsql.com",
    url: process.env.DATABASE_URL,
    port: 5432,
    synchronize: true,
    logging: false,
    entities: [UserEntity, Contact, VerifyEmailEntity],
});

postgresDataSource.initialize().then(async () => {
    log.info("Data source has been started");
}).catch((err) => {
    log.error(`Error DataSource's connection: ${err}`);
});