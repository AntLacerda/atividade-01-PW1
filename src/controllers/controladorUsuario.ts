import { Request, Response } from "express";
import { userServices } from "../services/servicoUsuario";
import { v4 as uuid } from "uuid";

const index = (req: Request, res: Response) => {
    const users = userServices.buscarTodosOsUsuarios();
    return res.json(users);
}

const show = (req: Request, res: Response) => {
    const {username} = req.params;
    const user = userServices.buscarUsuarioPorUsername(username);
    return res.json(user);
}

const store = (req: Request, res: Response) => {
    const {nome, username, tecnologias} = req.body;
    const user = {
        id: uuid(),
        nome,
        username,
        tecnologias: tecnologias || [],
    }
    const criarUsuario = userServices.criarUsuario(user);
    if(!criarUsuario){
        alert("Não foi possível criar usuário!");
    } else {
        return res.status(201).json(user);
    }
}

export const controladorUsuario = {
    index, 
    show, 
    store,
}