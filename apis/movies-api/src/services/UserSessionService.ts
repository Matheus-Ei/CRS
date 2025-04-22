import { UserSession } from "../entities/UserSession";
import UserSessionsModel from "../models/UserSessionsModel";

export class UserSessionService {
  static get = async (id: number) => {
    return await UserSessionsModel.findOne({ where: { id } });
  };

  static getAll = async () => {
    return await UserSessionsModel.findAll();
  };

  static create = async (data: Omit<UserSession, 'id'>) => {
    return await UserSessionsModel.create(data);
  };

  static update = async (id: number, data: Partial<UserSession>) => {
    await UserSessionsModel.update(data, { where: { id } });
    return await UserSessionsModel.findOne({ where: { id } });
  };

  static destroy = async (id: number) => {
    await UserSessionsModel.destroy({ where: { id } });
  };
}
