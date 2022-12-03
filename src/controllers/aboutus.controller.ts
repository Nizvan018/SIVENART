import { Response, Request } from 'express';

export function ver_aboutus(req: Request, res: Response) {
    res.render('aboutus');
}