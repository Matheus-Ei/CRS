import { Movie } from "../entities/Movie";
import MoviesModel from "../models/MoviesModel";

export class MovieService {
  static get = async (id: number) => {
    return await MoviesModel.findOne({ where: { id } });
  };

  static getAll = async () => {
    return await MoviesModel.findAll();
  };

  static create = async (data: Omit<Movie, 'id'>) => {
    return await MoviesModel.create(data);
  };

  static update = async (id: number, data: Partial<Movie>) => {
    await MoviesModel.update(data, { where: { id } });
    return await MoviesModel.findOne({ where: { id } });
  };

  static destroy = async (id: number) => {
    await MoviesModel.destroy({ where: { id } });
  };
}
