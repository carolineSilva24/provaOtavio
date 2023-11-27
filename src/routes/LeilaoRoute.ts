import { Router } from "express";
import LeilaoController from "../controllers/LeilaoController";
import UsuarioRouter from "./UsuarioRoute";

const LeilaoRouter = Router();

LeilaoRouter.get('/leiloes', LeilaoController.listLeilao);

export default LeilaoRouter;
