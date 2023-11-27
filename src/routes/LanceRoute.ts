import LanceController from "../controllers/LanceController";
import { Router } from "express";

const LanceRouter = Router();

LanceRouter.get('/lances', LanceController.listLance);

export default LanceRouter;
