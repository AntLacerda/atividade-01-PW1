import { Request, Response } from "express";
import { tecnologyServices } from "../services/servicoTecnologia";
import { v4 as uuid } from "uuid";
import { log } from "console";

const index = (req: Request, res: Response) => {
    const {username} = req.headers;
    const tecnologias = tecnologyServices.buscarTodastecnologias(username as string);
    return res.json(tecnologias);
}

const store = (req: Request, res: Response) => {
    const {username} = req.headers;
    const {titulo, prazoFinal} = req.body;
    if(!titulo || !prazoFinal) {
        return res.status(400).send({message: "Titulo e prazo final são necessários!"})
    } else {
        const tecnologia = {
            id: uuid(),
            titulo,
            estudou: false,
            prazoFinal: new Date(prazoFinal),
            criadoEm: new Date(),
        }

        const criarTecnologia = tecnologyServices.criarTecnologia(username as string, tecnologia);
        
        if(!criarTecnologia){
            return res.status(400).send({message: "Tecnologia já existe!"})
        } else {
            return res.status(201).json(tecnologia);
        }
    }
}

const update = (req: Request, res: Response) => {
    const {username} = req.headers;
    const {idTec} = req.params;
    const {titulo, prazoFinal} = req.body;
    if(!titulo || !prazoFinal){
        return res.status(400).send({message: "Titulo e prazo final são necessários!"})
    } else {
        const atualizaTecnologia = tecnologyServices.atualizarTecnologia(username as string, idTec, titulo, prazoFinal);

        if(!atualizaTecnologia) {
            return res.status(404).send({message: "Tecnologia não encontrada!"})
        } else {
            return res.status(204).send();
        }
    }
}

const updateStatus = (req: Request, res: Response) => {
    const {username} = req.headers;
    const {idTec} = req.params;
    const atualizarTecnologia = tecnologyServices.atualizarStatusTecnologia(username as string, idTec);
    if(!atualizarTecnologia) {
        return res.status(404).send({message: "Tecnologia não encontrada!"})
    } else {
        return res.status(204).send();
    }
}

const destroy = (req: Request, res: Response) => {
    const {username} = req.headers;
    const {idTec} = req.params;
    const deletarTecnologia = tecnologyServices.deletarTecnologia(username as string, idTec);
    
    if(!deletarTecnologia) {
        return res.status(404).send({message: "Tecnologia não encontrada!"})
    } else {
        return res.status(204).send();
    }
}

export const controladorTecnologia = {
    index, 
    store, 
    update, 
    updateStatus,
    destroy,
}