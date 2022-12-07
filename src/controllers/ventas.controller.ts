import { Response, Request } from "express";
import { orden } from "../models/ventas/orden";
import { orden_detalle } from "../models/ventas/detaller_orden";

/* Funciones para el carrito y el pago */
export const pago = async (req: Request, res: Response) => {
    let cookie_car = JSON.parse(req.cookies.car);
    const {total}=req.body;
    const user = req.session;
    const newOrden = await orden.create({
        idClientEsp:user.user?.id,
        total
    });

    for (var i in cookie_car) {
        const newDetalles = await orden_detalle.create({
            idOrden: newOrden.getDataValue("idOrden"),
            idProducto:i
        });
};


}

