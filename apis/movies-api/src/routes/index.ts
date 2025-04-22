import { MovieRoute } from "./MovieRoute";
import { RoomRoute } from "./RoomRoute";
import { SessionRoute } from "./SessionRoute";
import { UserRoute } from "./UserRoute";

export const ROUTES = [
  { endpoint: "/users", router: UserRoute.init() },
  { endpoint: "/session", router: SessionRoute.init() },
  { endpoint: "/room", router: RoomRoute.init() },
  { endpoint: "/movie", router: MovieRoute.init() },
];
