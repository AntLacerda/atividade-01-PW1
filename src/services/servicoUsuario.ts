import { database } from "../database/datab";
import { UsuarioDTO } from "../dtos/dtoUsuario";

const buscarUsuarioPorId = (id: string) => {
    const user = database.find((idAtual)=>{idAtual.id === id});
    return user;
}

const buscarUsuarioPorUsername = (username: string) => {
    const user = database.find((usernameAtual)=>{usernameAtual.username===username});
    return user;
}

const buscarTodosOsUsuarios = (): UsuarioDTO[] => {
    return database;
}

const usuarioExiste = (username: string): boolean => {
    return buscarUsuarioPorUsername(username) ? true : false;
}

const criarUsuario = (usuario: UsuarioDTO): boolean => {
    if(usuarioExiste(usuario.username)){
        return false;
    } else {
        database.push(usuario);
        return true;
    }
}

export const userServices = {
    usuarioExiste, 
    buscarUsuarioPorId, 
    buscarUsuarioPorUsername, 
    buscarTodosOsUsuarios, 
    criarUsuario,
}