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

  static update = async (id: number, data: Partial<User>) => {
    await UsersModel.update(data, { where: { id } });
    return await UsersModel.findOne({ where: { id } });
  };

  static destroy = async (id: number) => {
    await UsersModel.destroy({ where: { id } });
  };
}
