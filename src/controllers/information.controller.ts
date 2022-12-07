import { Response, Request } from 'express';
import { Model } from 'sequelize';
import { administrador } from '../models/administrador';
import { artesano } from '../models/artesano';
import { cliente } from '../models/cliente';
import { persona } from '../models/persona';
import { producto } from '../models/producto';
import { taller } from '../models/taller';
import { usuario } from '../models/usuario';

export function ver_aboutus(req: Request, res: Response) {
	res.render('information/aboutus');
}

export function no_permission(req: Request, res: Response) {
	res.render('error/no_permission');
}

/** Función para renderizar la vista de usuario: */
export const ver_usuario = async (req: Request, res: Response) => {
	const user = req.session.user;
	let productosTaller: object[] = [];
	let all_users;

	if (user != undefined) {
		const person = await persona.findOne({ where: { idUser: user.id } });

		if (person != undefined) {
			let user_esp = null;
			let avatar = null;

			if (user.rol == 'cliente') { // Si el usuario es cliente:
				user_esp = await cliente.findOne({ where: { idClientEsp: person.dataValues.idClient } });
			} else if (user.rol == 'artesano') { // Si el usuario es artesano:
				user_esp = await artesano.findOne({ where: { idClientEsp: person.dataValues.idClient } });

				if (user_esp != undefined) {
					avatar = user_esp.dataValues.avatar;
					let talleresArtesano = await taller.findAll({ where: { idArtesano: user_esp.dataValues.idClientEsp } });

					if (talleresArtesano != undefined) {
						const productosPromises = talleresArtesano.map(async tallerArtesano => {
							const productos = await producto.findAll({ where: { idTaller: tallerArtesano.dataValues.idTaller } });

							if (productos !== undefined) {
								productosTaller = productosTaller.concat(productos);
							}
						});

						await Promise.all(productosPromises);
					}
				}
			} else { // Si el usuario es administrador:
				all_users = await usuario.findAll();
				user_esp = await administrador.findOne({ where: { idClientEsp: person.dataValues.idClient } });
				console.log(all_users);

				if (user_esp != null) {
					avatar = user_esp.dataValues.avatar;
				}
			}

			if (user_esp != null) {
				res.render('information/usuario', { user, person, user_esp, avatar, productosTaller, all_users });
			} else {
				new Error('El usuario no existe');
			}
		} else {
			new Error('El usuario no existe');
		}
	} else {
		new Error('No existe ninguna sesión');
	}
}

export const ver_talleres = async (req: Request, res: Response) => {
	const talleres = await taller.findAll();
	res.render('information/talleres', { talleres });
	// res.render('information/talleres');
}