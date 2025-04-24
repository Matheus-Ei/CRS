import { QueryTypes } from "sequelize";
import { sequelize } from "../core/database";
import { User } from "../entities/User";
import UsersModel from "../models/UsersModel";

export class UserService {
  static get = async (id: number) => {
    return await UsersModel.findOne({ where: { id } });
  };

  static getAll = async () => {
    return await UsersModel.findAll();
  };

  static create = async (data: Omit<User, "id">) => {
    return await UsersModel.create(data);
  };

  static getSessions = async (id: number) => {
    return await sequelize.query(`
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
    `, { replacements: { userId: id }, type: QueryTypes.SELECT });
  };

  static update = async (id: number, data: Partial<User>) => {
    await UsersModel.update(data, { where: { id } });
    return await UsersModel.findOne({ where: { id } });
  };

  static destroy = async (id: number) => {
    await UsersModel.destroy({ where: { id } });
  };
}
