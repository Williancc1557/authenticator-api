import { DataSource } from "typeorm";
import { CheckEmail } from "../entities/check-email.entity";
import { User } from "../entities/user.entity";
import { config } from "dotenv";
config();

export const postgresDataSource = new DataSource({
    type: "postgres",
    host: "motty.db.elephantsql.com",
    url: process.env.DATABASE_URL,
    port: 5432,
    synchronize: true,
    logging: false,
    entities: [User, CheckEmail],
});

postgresDataSource.initialize().then(async () => {
    console.log("The DataSource has been conected!");
}).catch((err) => {
    console.log(`Error in the connection DataSource: ${err}`);
});