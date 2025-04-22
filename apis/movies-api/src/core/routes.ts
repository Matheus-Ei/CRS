import { MovieRoute } from "../routes/MovieRoute";
import { RoomRoute } from "../routes/RoomRoute";
import { SessionRoute } from "../routes/SessionRoute";
import { UserRoute } from "../routes/UserRoute";

export const ROUTES = [
  { endpoint: "/users", router: UserRoute.init() },
  { endpoint: "/session", router: SessionRoute.init() },
  { endpoint: "/room", router: RoomRoute.init() },
  { endpoint: "/movie", router: MovieRoute.init() },
];
