import { Router } from "express";
import { mostrar_login, registrar } from "../controller/user_controller";
const userRouter = Router();

userRouter.get('/user/login', mostrar_login);
userRouter.post('/user/register', registrar)