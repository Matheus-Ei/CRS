import { Router } from "express";

export abstract class AbstractRoute {
  public static router = Router();

  static init = () => {};
}
