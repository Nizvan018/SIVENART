import { Response, Request } from 'express';
import { administrador } from '../models/administrador';
import { artesano } from '../models/artesano';
import { cliente } from '../models/cliente';
import { persona } from '../models/persona';
import { taller } from '../models/taller';

export function ver_aboutus(req: Request, res: Response) {
    res.render('information/aboutus');
}

export const ver_usuario = async (req:Request, res:Response) => {
    const user = req.session.user;

    if(user != undefined){
        const person = await persona.findOne( { where:{ idUser: user.id } } );

        if(person != undefined){
            let user_esp = null;
    
            if(user.rol == 'cliente'){
                user_esp = await cliente.findOne( { where:{ idClientEsp: person.dataValues.idClient } } );
            } else if(user.rol == 'artesano'){
                user_esp = await artesano.findOne( { where:{ idClientEsp: person.dataValues.idClient }  });
            } else{
                user_esp = await administrador.findOne( { where:{ idClientEsp: person.dataValues.idClient } } );
            }
    
            if(user_esp != null){
                res.render('information/usuario', { user, person, user_esp });
            } else{
                new Error('El usuario no existe');
            }
        } else{
            new Error('El usuario no existe');
        }
    } else{
        new Error('No existe ninguna sesión');
    }
    // res.render('information/usuario');
}

export const ver_talleres = async (req: Request, res: Response) => {
    const talleres = await taller.findAll();
    res.render('information/talleres', {talleres});
    // res.render('information/talleres');
}