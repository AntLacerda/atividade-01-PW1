import { Request, Response } from "express";
import { userServices } from "../services/servicoUsuario";
import { v4 as uuid } from "uuid";

const index = (req: Request, res: Response) => {
    const users = userServices.buscarTodosOsUsuarios();
    return res.json(users);
}