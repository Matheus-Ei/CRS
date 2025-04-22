import { UserSessionController } from "../controllers/UserSessionController";
import { AbstractRoute } from "./AbstractRoute";

export class UserSessionRoute extends AbstractRoute {
  static init = () => {
    this.router.post("/", UserSessionController.create);
    this.router.patch("/:id", UserSessionController.update);
    this.router.delete("/:id", UserSessionController.destroy);
    this.router.get("/:id", UserSessionController.get);
    this.router.get("/", UserSessionController.getAll);

    return this.router;
  };
}
