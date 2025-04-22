import { PlacePattern } from "../entities/PlacePattern";
import PlacePatternsModel from "../models/PlacesPatternModel";

export class PlacePatternService {
  static get = async (id: number) => {
    try {
      return await PlacePatternsModel.findOne({ where: { id } });
    } catch {
      return null;
    }
  };

  static getAll = async () => {
    try {
      return await PlacePatternsModel.findAll();
    } catch {
      return null;
    }
  };

  static create = async () => {
    try {
      return await PlacePatternsModel.create();
    } catch {
      return null;
    }
  };

  static update = async (id: number, data: Partial<PlacePattern>) => {
    try {
      await PlacePatternsModel.update(data, { where: { id } });
      return await PlacePatternsModel.findOne({ where: { id } });
    } catch {
      return null;
    }
  };

  static destroy = async (id: number) => {
    try {
      await PlacePatternsModel.destroy({ where: { id } });
    } catch {
      return null;
    }
  };
}
