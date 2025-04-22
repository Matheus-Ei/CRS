import { User } from "../entities/User";
import UsersModel from "../models/UsersModel";

export class UserService {
  static get = async (id: number) => {
    try {
      return await UsersModel.findOne({ where: { id } });
    } catch {
      return null;
    }
  };

  static getAll = async () => {
    try {
      return await UsersModel.findAll();
    } catch {
      return null;
    }
  };

  static create = async (data: Omit<User, "id">) => {
    try {
      return await UsersModel.create(data);
    } catch (error) {
      // console.error(error);
      return null;
    }
  };

  static update = async (id: number, data: Partial<User>) => {
    try {
      await UsersModel.update(data, { where: { id } });
      return await UsersModel.findOne({ where: { id } });
    } catch {
      return null;
    }
  };

  static destroy = async (id: number) => {
    try {
      await UsersModel.destroy({ where: { id } });
    } catch {
      return null;
    }
  };
}
