import { Response, Request } from "express";
import { producto } from "../models/producto";
import multer, { Multer } from 'multer';
import path from "path";
import { v4 as uuidv4 } from 'uuid';
import { Op } from "sequelize";

/** Funciones para el renderizado de vistas: */

export async function ver_productos(req:Request, res:Response){
    const productos = await producto.findAll();
    res.render('products/see_products', {productos: productos});
}

export function registrar_producto(req:Request, res:Response){
    res.render('products/register_products');
}

/* Funciones para el carrito y el pago */
export const pagar_productos = async(req:Request, res:Response) =>{
    let cookie_car = JSON.parse(req.cookies.car);
    let all_products = [];
    for(var i in cookie_car	) all_products.push({codigo: i});
    const productos = await producto.findAll({
        where: {
            [Op.or]:all_products
        }
    });
    res.render('products/payment-cart',{productos: productos, car: cookie_car});
}

/** Funciones del back-end: */

export const viewProductos = async (req: Request, res: Response) => {
    const productos = await producto.findAll();
    res.send("OBTENIDOS")
}

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/img/productos'),
    filename: (req, file, cb) => {
        cb(null, uuidv4()+ path.extname(file.originalname).toLocaleLowerCase());
    }
});

export const imagenUp = multer({
    storage,
    dest: path.join(__dirname, '../public/img/productos'),
    limits: { fileSize: 5000000 },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/;
        const mytype = filetypes.test(file.mimetype);
        const extension = filetypes.test(path.extname(file.originalname));
        if (mytype && extension) {
            return cb(null, true);
        }
        cb(new Error("Error: Introduce una imagen válida"));
    }
}).single("imagen");

export const createProduct = async (req: Request, res: Response) => {
    const user = req.session;
    const {nombre,stock,precio,descripcion,categoria } = req.body;
    const newProduct = await producto.create({
        nombre,
        stock,
        foto:req.file?.filename,
        descripcion,
        precio,
        categoria,
        idTaller:user.user?.idTaller
    });
    res.send("Creando producto");
}