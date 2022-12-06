import { Response, Request } from 'express';
import { usuario } from "../models/usuario"
import { taller } from "../models/taller"
import { administrador } from "../models/administrador"
import { artesano } from "../models/artesano"
import { persona } from '../models/persona';
import { hashPassword } from '../libraries/bycript.library';

import multer, { Multer } from 'multer';
import path from "path";
import * as mailService from "../services/mailer.service"
import { v4 as uuidv4 } from 'uuid';

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/img/usuarios'),
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname).toLocaleLowerCase());
    }
});

export const avatarUp = multer({
    storage,
    dest: path.join(__dirname, '../public/img/productos'),
    limits: { fileSize: 5000000 },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/;
        const mytype = filetypes.test(file.mimetype);
        const extension = filetypes.test(path.extname(file.originalname));
        if (mytype && extension) {
            return cb(null, true);
        }
        cb(new Error("Error: Introduce una imagen válida"));
    }
}).single("avatar");

/** Funciones para el renderizado de vistas: */

export function register_usuario(req: Request, res: Response) {
    res.render('register/register_usuario');
}

export function register_taller(req: Request, res: Response) {
    res.render('register/register_taller');
}

/** Funciones aparte: */

export const createTaller = async (req: Request, res: Response) => {

    const { nombre, descripcion, calle, numero, colonia, codigo_postal, localidad, entidad, idArtesano } = req.body;
    const newTaller = await taller.create({
        nombre,
        avatar:req.file?.filename,
        descripcion,
        calle,
        numero,
        colonia,
        codigo_postal,
        localidad,
        entidad,
        idArtesano
    });
    res.redirect("/products/ver/all");
}

export const createUser = async(req:Request, res:Response)=>{
    const{tipo,puesto,email,telefono,contra,nombre,p_apellido,s_apellido} = req.body;
    const newUser = await usuario.create({
        email,
        password : hashPassword(contra),
        rol: tipo,
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
            avatar:req.file?.filename,
        })
    }else if (tipo=="artesano") {
        const newArtesano = await artesano.create({
            idClientEsp:newPerson.getDataValue("idClient"),
            avatar:req.file?.filename,
            puesto
        })
    }

    //Send a email to the new user
    await mailService.sendUserCredentials({
        email,
        data: { email: email, password: contra, nombre: nombre, p_apellido: p_apellido },
      });

      res.redirect("/information/usuario");
}