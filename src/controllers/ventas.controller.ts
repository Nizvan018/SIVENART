import { Response, Request } from "express";
import { orden } from "../models/ventas/orden";
import { orden_detalle } from "../models/ventas/detalle_orden";

/* Funciones para el carrito y el pago */
export const pago = async (req: Request, res: Response) => {
    let cookie_car = JSON.parse(req.cookies.car);
    const {total}=req.body;
    const user = req.session;

    const newOrden = await orden.create({
        idClientEsp:user.user?.idTaller,
        total
    });

    for (var i in cookie_car) {
        console.log(cookie_car[i]);
        const newDetalles = await orden_detalle.create({
            idOrden: newOrden.getDataValue("idOrden"),
            cantidad: cookie_car[i].quantity,
            idProducto:i
        });
    };

    res.clearCookie("car");
    res.redirect("/products/ver/all");
};

