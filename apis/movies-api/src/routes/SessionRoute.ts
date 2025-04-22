import { SessionController } from "../controllers/SessionController";
import { AbstractRoute } from "./AbstractRoute";

export class SessionRoute extends AbstractRoute {
  static init = () => {
    this.router.post("/", SessionController.create);
    this.router.patch("/:id", SessionController.update);
    this.router.delete("/:id", SessionController.destroy);
    this.router.get("/:id", SessionController.get);
    this.router.get("/", SessionController.getAll);

    return this.router;
  };
}
