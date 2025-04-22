import { UserController } from "../controllers/UserController";
import { AbstractRoute } from "./AbstractRoute";

export class UserRoute extends AbstractRoute {
  static init = () => {
    this.router.post("/", UserController.create);
    this.router.patch("/:id", UserController.update);
    this.router.delete("/:id", UserController.destroy);
    this.router.get("/:id", UserController.get);
    this.router.get("/", UserController.getAll);

    return this.router;
  };
}
