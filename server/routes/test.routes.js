import { Router } from "express";
import { home } from "../controllers/test.controller";
const api = new Router();

api.get("/", home);

export default api;
