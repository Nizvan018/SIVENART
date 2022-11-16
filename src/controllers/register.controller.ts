import { Response, Request } from 'express';
import {User} from "../models/usuario"
import {administrador} from "../models/administrador"
import {artesano} from "../models/artesano"

/** Funciones para el renderizado de vistas: */

export function register_usuario(req:Request, res:Response){
    res.render('register/register_usuario');
}

export function register_taller(req:Request, res:Response){
    res.render('register/register_taller');
}

/** Funciones aparte: */

export const createUser = async(req:Request, res:Response)=>{
    const{tipo,avatar_artesano,avatar_administrador,puesto,id_taller,email,telefono,password,nombre,p_apellido,s_apellido} =req.body;
    const newUser = await User.create({
        email,
        telefono,
        password,
        nombre,
        primer_apellido: p_apellido,
        segundo_apellido: s_apellido
    })
    if (tipo=="administrador") {
        
        const newAdmin = await administrador.create({
            idUser:newUser.getDataValue("idUser"),
            avatar:avatar_administrador
        })
        console.log(newAdmin);
    }else if (tipo=="artesano") {
        const newArtesano = await artesano.create({
            idUser:newUser.getDataValue("idUser"),
            avatar:avatar_artesano,
            puesto,
            idtaller:id_taller
        })
        console.log(newArtesano);
    }
    console.log(newUser);
    res.send("Creando usuario");
}