import { Request, Response } from "express";
import { UserSessionService } from "../services/UserSessionService";
import { Res } from "../utils/response";

export class UserSessionController {
  static get = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const resource = UserSessionService.get(Number(id));

      return Res.sendByType(res, "found", undefined, resource);
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };

  static getAll = async (_: Request, res: Response) => {
    try {
      const resource = UserSessionService.getAll();

      return Res.sendByType(res, "found", undefined, resource);
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };

  static create = async (req: Request, res: Response) => {
    const data = req.body;

    try {
      const resource = await UserSessionService.create(data);

      return Res.sendByType(res, "created", undefined, resource);
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };

  static update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;

    try {
      const resource = await UserSessionService.update(Number(id), data);

      return Res.sendByType(res, "updated", undefined, resource);
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };

  static destroy = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      await UserSessionService.destroy(Number(id));

      return Res.sendByType(res, "deleted");
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };
}
