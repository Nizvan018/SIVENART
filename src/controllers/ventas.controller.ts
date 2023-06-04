import { Response, Request } from "express";
import { orden } from "../models/ventas/orden";
import { orden_detalle } from "../models/ventas/detalle_orden";
import { producto } from "../models/producto";
import { INTEGER } from "sequelize";

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
        const newDetalles = await orden_detalle.create({
            idOrden: newOrden.getDataValue("idOrden"),
            cantidad: cookie_car[i].quantity,
            idProducto:i
        });

        //------------------------------Segmento en prueba---------------------------------
        const prod = await producto.findOne( { where: { codigo: i }} );
        console.log(prod?.dataValues["stock"] - cookie_car[i].quantity)
        producto.update({
            stock: Number(prod?.dataValues["stock"] - cookie_car[i].quantity)
        }, 
        {
            where: {
                codigo: i
            }
        });
        //------------------------------Segmento en prueba---------------------------------
    };

    res.clearCookie("car");
    res.redirect("/products/ver/all");
};

