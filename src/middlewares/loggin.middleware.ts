import { Request, Response, NextFunction } from "express";


export function createLogginMiddleware(rolUser:string){

    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.session.user) {
            return res.redirect("/login");
        }

        if(req.session.user.rol !== rolUser ){
            return res.redirect("/information/no-autorizados");
        }

        next();
    }

}