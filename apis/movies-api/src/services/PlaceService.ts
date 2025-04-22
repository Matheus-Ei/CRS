import { Place } from "../entities/Place";
import PlacesModel from "../models/PlacesModel";

export class PlaceService {
  static get = async (id: number) => {
    try {
      return await PlacesModel.findOne({ where: { id } });
    } catch {
      return null;
    }
  };

  static getAll = async () => {
    try {
      return await PlacesModel.findAll();
    } catch {
      return null;
    }
  };

  static create = async (data: Omit<Place, "id">) => {
    try {
      return await PlacesModel.create(data);
    } catch {
      return null;
    }
  };

  static update = async (id: number, data: Partial<Place>) => {
    try {
      await PlacesModel.update(data, { where: { id } });
      return await PlacesModel.findOne({ where: { id } });
    } catch {
      return null;
    }
  };

  static destroy = async (id: number) => {
    try {
      await PlacesModel.destroy({ where: { id } });
    } catch {
      return null;
    }
  };
}
