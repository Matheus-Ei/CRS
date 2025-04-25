import { QueryTypes } from "sequelize";
import { sequelize } from "../core/database";
import { User } from "../entities/User";
import UsersModel from "../models/UsersModel";
import { Hash } from "../utils/hash";
import { Token } from "../utils/token";
import { ENV } from "../core/enviroment";

export class UserService {
  static get = async (id: number) => {
    return await UsersModel.findOne({ where: { id } });
  };

  static login = async (email: string, password: string) => {
    const user = await UsersModel.findOne({ where: { email } });

    if (!user) return false;

    const isMatch = await Hash.compare(password, user.dataValues.password);

    let token = null;
    if (isMatch) {
      token = Token.generate(
        { id: String(user.dataValues.id) },
        60,
        ENV.ACCESS_SECRET,
      );
    }

    // req.headers.autorization
    return token;
  };

  static getAll = async () => {
    return await UsersModel.findAll();
  };

  static create = async (data: Omit<User, "id">) => {
    const password = await Hash.make(data.password);
    const formatedData = { ...data, password };

    return await UsersModel.create(formatedData);
  };

  static getSessions = async (id: number) => {
    return await sequelize.query(
      `
      SELECT 
        u.name AS user_name,
        u.cpf AS user_cpf,
        m.title AS movie_title, 
        m.description AS movie_description,
        r.id AS room_id,
        r.description AS room_description,
        m.duration AS duration,
        s.start_date AS start_date
      FROM users u
      JOIN tickets t ON t.user_id = u.id
      JOIN sessions s ON s.id = t.session_id
      JOIN movies m ON m.id = s.movie_id
      JOIN rooms r ON r.id = s.room_id
      WHERE u.id = :userId;
    `,
      { replacements: { userId: id }, type: QueryTypes.SELECT },
    );
  };

  static update = async (id: number, data: Partial<User>) => {
    await UsersModel.update(data, { where: { id } });
    return await UsersModel.findOne({ where: { id } });
  };

  static destroy = async (id: number) => {
    await UsersModel.destroy({ where: { id } });
  };
}
