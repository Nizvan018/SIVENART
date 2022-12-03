import { Response, Request } from 'express';
import { taller } from '../models/taller';

export function ver_aboutus(req: Request, res: Response) {
    res.render('information/aboutus');
}

export const ver_talleres = async (req: Request, res: Response) => {
    const talleres = await taller.findAll();
    res.render('information/talleres', {talleres});
    // res.render('information/talleres');
}