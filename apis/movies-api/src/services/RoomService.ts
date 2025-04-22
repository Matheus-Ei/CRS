import { Room } from "../entities/Room";
import RoomsModel from "../models/RoomsModel";

export class RoomService {
  static get = async (id: number) => {
    try {
      return await RoomsModel.findOne({ where: { id } });
    } catch {
      return null;
    }
  };

  static getAll = async () => {
    try {
      return await RoomsModel.findAll();
    } catch {
      return null;
    }
  };

  static create = async (data: Omit<Room, "id">) => {
    try {
      return await RoomsModel.create(data);
    } catch {
      return null;
    }
  };

  static update = async (id: number, data: Partial<Room>) => {
    try {
      await RoomsModel.update(data, { where: { id } });
      return await RoomsModel.findOne({ where: { id } });
    } catch {
      return null;
    }
  };

  static destroy = async (id: number) => {
    try {
      await RoomsModel.destroy({ where: { id } });
    } catch {
      return null;
    }
  };
}
