import { Request, Response } from 'express';
import { usuario } from "../models/usuario"
import { taller } from "../models/taller"
import { persona } from "../models/persona"
import { isValidPassword } from '../libraries/bycript.library';
import UsuarioType from "../types/usuario.type"

declare module 'express-session' {
  interface SessionData {
    user: UsuarioType;
  }
}

export function login(req: Request, res: Response) {
  res.render('login/login2', { msg: "good" });
}

export async function auth(req: Request, res: Response) {
  try {
    const { body } = req;
    const { email, password } = body;
    const usuarioResponse = await usuario.findOne({ where: { email } });
    if (usuarioResponse !== null) {
      const contraseniaUsuario = usuarioResponse.getDataValue("password");
      if (isValidPassword(password, contraseniaUsuario)) {
        const user = usuarioResponse.toJSON();
        delete user.contrasenia;
        if (user.rol === "artesano") {
          const personaRes = await persona.findOne({ where: { idUser: user.id } });
          if (personaRes !== null) {
            const person = personaRes.toJSON();
            const tallerRes = await taller.findOne({ where: { idArtesano: person.idClient } });
            if (tallerRes !== null) {
              const tallerjson = tallerRes.toJSON();
              user.idTaller = tallerjson.idTaller;
            }
          }
        }
        req.session.user = user;
        return res.redirect("/products/ver/all");
      } else {
        /* res.status(201).json({ message: "invalid user" }); */
        return res.redirect("/login");
      }
    }

  } catch (error) {
    console.log(error);
    res.send("error");

  }
}

export function navbar(req: Request, res: Response) {
  res.render('navbar');
}