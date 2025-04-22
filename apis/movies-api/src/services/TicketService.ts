import { Ticket } from "../entities/Ticket";
import TicketsModel from "../models/TicketsModel";

export class TicketService {
  static get = async (id: number) => {
    try {
      return await TicketsModel.findOne({ where: { id } });
    } catch {
      return null;
    }
  };

  static getAll = async () => {
    try {
      return await TicketsModel.findAll();
    } catch {
      return null;
    }
  };

  static create = async (data: Omit<Ticket, "id">) => {
    try {
      return await TicketsModel.create(data);
    } catch {
      return null;
    }
  };

  static update = async (id: number, data: Partial<Ticket>) => {
    try {
      await TicketsModel.update(data, { where: { id } });
      return await TicketsModel.findOne({ where: { id } });
    } catch {
      return null;
    }
  };

  static destroy = async (id: number) => {
    try {
      await TicketsModel.destroy({ where: { id } });
    } catch {
      return null;
    }
  };
}
