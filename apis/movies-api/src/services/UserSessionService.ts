import { UserSession } from "../entities/UserSession";
import UserSessionsModel from "../models/UserSessionsModel";

export class UserSessionService {
  static get = async (id: number) => {
    try {
      return await UserSessionsModel.findOne({ where: { id } });
    } catch {
      return null;
    }
  };

  static getAll = async () => {
    try {
      return await UserSessionsModel.findAll();
    } catch {
      return null;
    }
  };

  static create = async (data: Omit<UserSession, "id">) => {
    try {
      return await UserSessionsModel.create(data);
    } catch {
      return null;
    }
  };

  static update = async (id: number, data: Partial<UserSession>) => {
    try {
      await UserSessionsModel.update(data, { where: { id } });
      return await UserSessionsModel.findOne({ where: { id } });
    } catch {
      return null;
    }
  };

  static destroy = async (id: number) => {
    try {
      await UserSessionsModel.destroy({ where: { id } });
    } catch {
      return null;
    }
  };
}
