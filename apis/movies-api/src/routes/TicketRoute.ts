import { TicketController } from "../controllers/TicketController";
import { AbstractRoute } from "./AbstractRoute";

export class TicketRoute extends AbstractRoute {
  static init = () => {
    this.router.post("/", TicketController.create);
    this.router.patch("/:id", TicketController.update);
    this.router.delete("/:id", TicketController.destroy);
    this.router.get("/:id", TicketController.get);
    this.router.get("/", TicketController.getAll);

    return this.router;
  };
}
