import {Request, Response} from 'express';

export function login(req:Request, res:Response){
    res.render('login/login2');
}

export function navbar(req:Request, res:Response){
    res.render('navbar');
}