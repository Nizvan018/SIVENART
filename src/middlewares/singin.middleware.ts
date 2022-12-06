import { Request, Response, NextFunction } from "express";


export function createSinginMiddleware(){

    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.session.user) {
            return res.redirect("/login");
        };

        next();
    }

}