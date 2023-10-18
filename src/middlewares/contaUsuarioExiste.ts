import { Request, Response, NextFunction } from "express";
import { userServices } from "../services/servicoUsuario";

export const contaUsuarioExiste = (req: Request, res: Response, next: NextFunction) => {
    const {username} = req.headers;
    const user = userServices.buscarUsuarioPorUsername(username as string);
    if(!user) {
        console.log("Usuario não encontrado")!
    } else {
        next();
    }
}