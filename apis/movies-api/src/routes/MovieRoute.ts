import { MovieController } from "../controllers/MovieController";
import { AbstractRoute } from "./AbstractRoute";

export class MovieRoute extends AbstractRoute {
  static init = () => {
    this.router.post("/", MovieController.create);
    this.router.patch("/:id", MovieController.update);
    this.router.delete("/:id", MovieController.destroy);
    this.router.get("/:id", MovieController.get);
    this.router.get("/", MovieController.getAll);

    return this.router;
  };
}
