import { Elysia } from "elysia";
import { findALL } from "../handlers/flights.handlers";

export const flightsRoutes = (app: Elysia) => (
    app.get('/flights', async({}) =>{
        const result = findALL();
        return result;
    })
)