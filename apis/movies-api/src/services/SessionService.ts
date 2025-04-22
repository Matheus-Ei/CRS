import { Session } from "../entities/Session";
import SessionsModel from "../models/SessionsModel";

export class SessionService {
  static get = async (id: number) => {
    try {
      return await SessionsModel.findOne({ where: { id } });
    } catch {
      return null;
    }
  };

  static getAll = async () => {
    try {
      return await SessionsModel.findAll();
    } catch {
      return null;
    }
  };

  static create = async (data: Omit<Session, "id">) => {
    try {
      return await SessionsModel.create(data);
    } catch {
      return null;
    }
  };

  static update = async (id: number, data: Partial<Session>) => {
    try {
      await SessionsModel.update(data, { where: { id } });
      return await SessionsModel.findOne({ where: { id } });
    } catch {
      return null;
    }
  };

  static destroy = async (id: number) => {
    try {
      await SessionsModel.destroy({ where: { id } });
    } catch {
      return null;
    }
  };
}
