import { Request, Response, NextFunction } from "express";
import { userServices } from "../services/servicoUsuario";

export const contaUsuarioExiste = (req: Request, res: Response, next: NextFunction) => {
    const {username} = req.headers;
    const user = userServices.buscarUsuarioPorUsername(username as string);
    if(!user) {
        return res.status(404).send({message:"Usuario não encontrado"});
    } else {
        next();
    }
}