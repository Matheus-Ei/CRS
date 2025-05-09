import { Sequelize } from 'sequelize';
import 'dotenv/config';

(async () => {
  sequelize.sync({force: true})
})

export const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host:process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'postgres'
  }
)
