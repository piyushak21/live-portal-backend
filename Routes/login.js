import express from "express";
import { login, signup } from "../Controller/LoginController.js";

const LoginRouter = express.Router();

LoginRouter.post("/login-user", login);

LoginRouter.post("/user-create", signup);

export default LoginRouter;
