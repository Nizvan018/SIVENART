import { Response, Request } from 'express';

export function register_usuario(req:Request, res:Response){
    res.render('register/register_usuario');
}