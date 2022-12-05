export default interface UsuarioType{
    id?:number;
    email?:string;
    password?:string;
    rol?:string
    token_restauracion?: string;
    idTaller?:string
}