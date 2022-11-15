import { Response, Request } from 'express';

export function register_taller(req:Request, res:Response){
    res.render('register/register_taller');
}