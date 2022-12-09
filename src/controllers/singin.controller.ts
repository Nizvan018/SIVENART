import { Request, Response } from "express";
import { hashPassword } from "../libraries/bycript.library";
import { cliente } from "../models/cliente";
import { persona } from "../models/persona";
import { usuario } from "../models/usuario";
import * as mailService from '../services/mailer.service';


/** Funciones para el renderizado de vistas: */
export const register_client = async (req: Request, res: Response) => {
    res.render('singin/register_client');
}

export function correo_invalido(req:Request, res:Response){
    res.render('error/invalid_email');
}

export const createClient = async (req: Request, res: Response) => {
    // console.log(req.body);
    const correos_existentes = await usuario.findAll();
    const {email,contra,telefono, nombre, p_apellido, s_apellido, calle, numero, colonia, codigo_postal, localidad, entidad } = req.body;
    let cont_correo = 0;

    correos_existentes.forEach(correo_existente => {
        if(correo_existente.dataValues.email === email){
            cont_correo++;
        }
    });

    if(cont_correo === 0){
        const newUser = await usuario.create({
            email,
            password: hashPassword(contra),
            rol: "cliente"
        });
    
        const newPerson = await persona.create({
            telefono,
            nombre,
            primer_apellido: p_apellido,
            segundo_apellido: s_apellido,
            idUser:newUser.getDataValue("id"),
        });
    
        const newClient = await cliente.create({
            idClientEsp:newPerson.getDataValue("idClient"),
            calle,
            numero,
            colonia,
            codigo_postal,
            localidad,
            entidad,
        });
    
        await mailService.sendClientConfirmation({
            email,
            data: { email: email, nombre: nombre, p_apellido: p_apellido }
        });
    
        res.redirect("/products/ver/all");
    } else{
        res.redirect('/signin/correo_invalido');
    }
}

