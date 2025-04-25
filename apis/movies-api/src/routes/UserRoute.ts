import { UserController } from "../controllers/UserController";
import { Application } from "express";

export class UserRoute {
  static init = (app: Application) => {
    app.post("/users", UserController.create);
    app.patch("/users", UserController.update);
    app.delete("/users", UserController.destroy);
    app.get("/users", UserController.get);
    app.get("/users/all", UserController.getAll);
    app.get("/users/:userId/sessions", UserController.getSessions);

    app.post("/users/auth", UserController.login);
  };
}
