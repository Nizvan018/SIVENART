import { Response, Request } from 'express';
import {usuario} from "../models/usuario"
import {administrador} from "../models/administrador"
import {artesano} from "../models/artesano"
import { persona } from '../models/persona';
import {transporter} from '../config/mailer'
import { hashPassword } from '../libraries/bycript.library';

/** Funciones para el renderizado de vistas: */

export function register_usuario(req:Request, res:Response){
    res.render('register/register_usuario');
}

export function register_taller(req:Request, res:Response){
    res.render('register/register_taller');
}

/** Funciones aparte: */

export const createUser = async(req:Request, res:Response)=>{
    const{tipo,avatar_artesano,avatar_administrador,puesto,email,telefono,password,nombre,p_apellido,s_apellido} =req.body;
    const newUser = await usuario.create({
        email,
        password : hashPassword(password),
        rol: tipo,
        nombre,
        primer_apellido: p_apellido,
        segundo_apellido: s_apellido
    });

    const newPerson = await persona.create({
        telefono,
        nombre,
        primer_apellido: p_apellido,
        segundo_apellido: s_apellido,
        idUser:newUser.getDataValue("id"),
    });

    if (tipo=="administrador") {
        const newAdmin = await administrador.create({
            idClientEsp:newPerson.getDataValue("idClient"),
            avatar:avatar_administrador
        })
    }else if (tipo=="artesano") {
        const newArtesano = await artesano.create({
            idClientEsp:newPerson.getDataValue("idClient"),
            avatar:avatar_artesano,
            puesto,
        })
    }

    //Send a email to the new user
    await transporter.sendMail({
        from: '"Sivenart" <sivenart.notifications@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Nuevo registro SEVENART", // Subject line
        html: `
        <h1>Hola ${nombre} ${p_apellido}, Haz sido añadido a SIVENART</h1>
        <p>Ahora formas parte de la web, las credenciales para tu usuario son las siguientes</p>
        <p>Email: ${email}</p>
        <p>Contraseña: ${password}</p>
        `
      });

    res.send("Creando usuario");
}