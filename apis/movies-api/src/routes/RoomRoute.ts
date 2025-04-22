import { RoomController } from "../controllers/RoomController";
import { AbstractRoute } from "./AbstractRoute";

export class RoomRoute extends AbstractRoute {
  static init = () => {
    this.router.post("/", RoomController.create);
    this.router.patch("/:id", RoomController.update);
    this.router.delete("/:id", RoomController.destroy);
    this.router.get("/:id", RoomController.get);
    this.router.get("/", RoomController.getAll);

    return this.router;
  };
}
