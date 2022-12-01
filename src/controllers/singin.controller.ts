import { request, Request, Response } from "express";

/** Funciones para el renderizado de vistas: */
export function singin(req:Request, res:Response){
    res.render('singin/singin');
}

export function register_client(req:Request, res:Response){
    // const {email, contra} = req.;
    console.log(req.body);
    res.render('singin/register_client');
}