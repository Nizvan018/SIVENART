import { Response, Request } from "express";


/** Funciones para el renderizado de vistas: */
export function registrar_producto(req:Request, res:Response){
    res.render('products/register_products');
}

/** Funciones del back-end: */