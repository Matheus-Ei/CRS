import * as clientController from "../controllers/clientController.js";

export default (app) => {
  app.get("/users", clientController.get);
  app.get("/users/:id", clientController.get);
  app.post("/users", clientController.persist);
  app.delete("/users/:id", clientController.remove);
  app.patch("/users/:id", clientController.persist);
};
