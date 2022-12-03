import { Request, Response } from "express";
import { hashPassword } from "../libraries/bycript.library";
import { cliente } from "../models/cliente";
import { persona } from "../models/persona";
import { usuario } from "../models/usuario";
import * as mailService from '../services/mailer.service';


/** Funciones para el renderizado de vistas: */
export function register_client(req: Request, res: Response) {
    res.render('singin/register_client');
}

export const createClient = async (req: Request, res: Response) => {
    console.log(req.body);
    const {email,contra,telefono, nombre, p_apellido, s_apellido, calle, numero, colonia, codigo_postal, localidad, entidad } = req.body;
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

    res.send("Creando cliente");
}

