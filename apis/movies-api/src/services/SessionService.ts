import { Session } from "../entities/Session";
import SessionsModel from "../models/SessionsModel";

export class SessionService {
  static get = async (id: number) => {
    return await SessionsModel.findOne({ where: { id } });
  };

  static getAll = async () => {
    return await SessionsModel.findAll();
  };

  static create = async (data: Omit<Session, 'id'>) => {
    return await SessionsModel.create(data);
  };

  static update = async (id: number, data: Partial<Session>) => {
    await SessionsModel.update(data, { where: { id } });
    return await SessionsModel.findOne({ where: { id } });
  };

  static destroy = async (id: number) => {
    await SessionsModel.destroy({ where: { id } });
  };
}
