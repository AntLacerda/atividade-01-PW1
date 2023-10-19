
import { database } from "../database/datab";
import { TecnologiaDTO } from "../dtos/dtoTecnologia";
import { userServices } from "./servicoUsuario";

const buscarTecnologia = (idTec: string, username: string) => {
    const user = userServices.buscarUsuarioPorUsername(username);
    const tecnology = database.find(()=>user?.tecnologias.find((tecnologia: TecnologiaDTO)=>tecnologia.id===idTec));
    
    if(!tecnology) {
        return false;
    } else {
        return tecnology as unknown as TecnologiaDTO;
    }
}

const tecnologiaExiste = (idTec: string, username: string) => {
    const tecnology = buscarTecnologia(idTec, username);
    return tecnology ? true : false;
}

//CREATE
const criarTecnologia = (username: string, tecnologia: TecnologiaDTO) => {
    if(tecnologiaExiste(tecnologia.id, username)){
        return false;
    } else {
        const user = userServices.buscarUsuarioPorUsername(username);
        user?.tecnologias.push(tecnologia);
        return user;
    }
}

//READ
const buscarTodastecnologias = (username: string) => {
    const user = userServices.buscarUsuarioPorUsername(username);
    return user?.tecnologias; 
}

//UPDATE
const atualizarTecnologia = (username: string, idTec: string, tituloNovo: string, prazoFinal: Date) => {
    const user = userServices.buscarUsuarioPorUsername(username);
    if(!tecnologiaExiste(idTec, username)){
        return false;
    } else {
        user?.tecnologias.map((tecnologia)=>{
            if(tecnologia.id===idTec){
                tecnologia.titulo = tituloNovo || tecnologia.titulo;
                tecnologia.prazoFinal = prazoFinal || tecnologia.prazoFinal;
            }
        });
        return true;
    }
}

//UPDATE
const atualizarStatusTecnologia = (username: string, idTec: string) => {
    const user = userServices.buscarUsuarioPorUsername(username);
    if(!tecnologiaExiste(idTec, username)){
        return false;
    } else {
        user?.tecnologias.map((tecnologia)=>{
            if(tecnologia.id===idTec){
                tecnologia.estudou = true;
            }
        });
        return true;
    }
}

//DELETE
const deletarTecnologia = (username: string, idTec: string) => {
    const user = userServices.buscarUsuarioPorUsername(username);
    if(!tecnologiaExiste(idTec, username)){
        return false;
    } else {
        const tecnology = buscarTecnologia(idTec, username);
        const index = user?.tecnologias.indexOf(tecnology as TecnologiaDTO);
        user?.tecnologias.splice(index!, 1);
        return true;
    }
}

export const tecnologyServices = {
    buscarTecnologia,
    buscarTodastecnologias,
    criarTecnologia,
    atualizarTecnologia, 
    atualizarStatusTecnologia, 
    deletarTecnologia,
}
