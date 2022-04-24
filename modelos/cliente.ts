import Documento from "./documento"
import Endereco from "./endereco"
import Agenda from "./telefones"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    public dataNascimento: Date
    public dataCadastro: Date
    public agenda: Agenda;
    public endereco: Endereco
    public documentos: Documento[] = []
    public dependentes: Cliente[] = []
    public titular: Cliente

}

