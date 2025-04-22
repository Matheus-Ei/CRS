import MoviesModel from "../models/MoviesModel";
import RoomsModel from "../models/RoomsModel";
import UsersModel from "../models/UsersModel";
import SessionsModel from "../models/SessionsModel";
import UserSessionsModel from "../models/UserSessionsModel";

export const models = async () => {
  await MoviesModel.sync({ force: true });
  await RoomsModel.sync({ force: true });
  await UsersModel.sync({ force: true });
  await SessionsModel.sync({ force: true });
  await UserSessionsModel.sync({ force: true });
};
