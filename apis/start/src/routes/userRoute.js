import * as userController from "../controllers/userController.js";

export default (app) => {
  app.get("/users", userController.getAll);
  app.get("/users/:id", userController.getId);
};
