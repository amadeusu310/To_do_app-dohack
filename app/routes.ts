import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/projectcheck", "routes/projectcheck.tsx"),
  route("/projectregister", "routes/projectregister.tsx"),
  route("/calender", "routes/calender.tsx"),
  route("/taskregister", "routes/taskregister.tsx"),
  route("/taskCheck", "routes/taskCheck.tsx"),
  route("/login", "routes/login.tsx"),
  route("/ranking", "routes/ranking.tsx"),
  route("/register", "routes/register.tsx")
] satisfies RouteConfig;