import { Movie } from "../entities/Movie";
import MoviesModel from "../models/MoviesModel";

export class MovieService {
  static get = async (id: number) => {
    try {
      return await MoviesModel.findOne({ where: { id } });
    } catch {
      return null;
    }
  };

  static getAll = async () => {
    try {
      return await MoviesModel.findAll();
    } catch {
      return null;
    }
  };

  static create = async (data: Omit<Movie, "id">) => {
    try {
      return await MoviesModel.create(data);
    } catch {
      return null;
    }
  };

  static update = async (id: number, data: Partial<Movie>) => {
    try {
      await MoviesModel.update(data, { where: { id } });
      return await MoviesModel.findOne({ where: { id } });
    } catch {
      return null;
    }
  };

  static destroy = async (id: number) => {
    try {
      await MoviesModel.destroy({ where: { id } });
    } catch {
      return null;
    }
  };
}
