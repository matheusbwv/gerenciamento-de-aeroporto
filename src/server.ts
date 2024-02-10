import { Elysia } from "elysia";
import { flightsRoutes } from "./routes/flights.routes";

new Elysia()
    .use(flightsRoutes)
    .listen(3001, () => console.log('server started at http://localhost:3001'))
