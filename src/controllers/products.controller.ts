import { Response, Request } from "express";


/** Funciones para el renderizado de vistas: */

export function ver_productos(req:Request, res:Response){
    res.render('products/see_products');
}

export function registrar_producto(req:Request, res:Response){
    res.render('products/register_products');
}

/** Funciones del back-end: */