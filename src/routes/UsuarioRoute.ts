import UsuarioController from "../controllers/UsuarioController";
import { Router } from "express";

const UsuarioRouter = Router();

UsuarioRouter.get('/users', UsuarioController.listUsuarios);

export default UsuarioRouter;
