import { ENV } from "./enviroment";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  ENV.DATABASE_NAME,
  ENV.DATABASE_USER,
  ENV.DATABASE_PASSWORD,
  {
    host: ENV.DATABASE_HOST,
    port: ENV.DATABASE_PORT,
    dialect: "postgres",
  },
);
