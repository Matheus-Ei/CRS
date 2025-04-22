import "dotenv/config";

import express, { Application } from "express";
import { ROUTES } from "./routes";
import cors from "cors";
import { ENV } from "./core/enviroment";

class Server {
  public app: Application = express();

  constructor() {
    this.middleware();
    this.routes();
  }

  middleware = () => {
    this.app.use(
      cors({
        origin: ["http://localhost"],
        methods: "GET,PUT,PATCH,POST,DELETE",
        credentials: true,
      }),
    );

    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(express.urlencoded({ extended: true, limit: "50mb" }));
  };

  routes = () => {
    ROUTES.forEach(({ endpoint, router }) => {
      this.app.use(endpoint, router);
    });
  };

  listen = () => {
    this.app.listen(ENV.SERVER_PORT, () => {
      console.clear();
      console.log("The server is running");
    });
  };
}

const run = new Server();
run.listen();
