import {Request, Response} from 'express';
import {usuario} from "../models/usuario"
import { isValidPassword } from '../libraries/bycript.library';
import UsuarioType from "../types/usuario.type"

declare module 'express-session' {
    interface SessionData {
      user: UsuarioType;
    }
  }

export function login(req:Request, res:Response){
    res.render('login/login2');
}

export async function auth(req:Request, res:Response){
    try {
        const { body } = req;
        const {email,password} = body;
        const usuarioResponse = await usuario.findOne({where:{email}});
        if(usuarioResponse !== null){
          const contraseniaUsuario = usuarioResponse.getDataValue("password");
          if(isValidPassword(password,contraseniaUsuario)){
            const user = usuarioResponse.toJSON();
            delete user.contrasenia;
            req.session.user = user;
            return res.redirect("/products");
          }else{
            res.status(201).json({message:"invalid user"});
          }
        }
       
      } catch (error) {
        console.log(error);
        res.send("error")
      }
}

export function navbar(req:Request, res:Response){
    res.render('navbar');
}