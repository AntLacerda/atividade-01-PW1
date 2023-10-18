import { TecnologiaDTO } from "./dtoTecnologia";

export type UsuarioDTO = {
    id: string;
    nome: string;
    username: string;
    tecnologias: TecnologiaDTO[];
}