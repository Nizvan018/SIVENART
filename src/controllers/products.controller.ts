import { Response, Request } from "express";
import { producto } from "../models/producto";
import multer, { Multer } from 'multer';
import path from "path";
import { v4 as uuidv4 } from 'uuid';
import { Op, or,QueryTypes } from "sequelize";
import { sequelize } from "../database/database.config";


/** Funciones para el renderizado de vistas: */

export async function ver_productos(req: Request, res: Response) {
    let cat = req.params.categoria;
    let productos;
    if (cat == "all") {
        productos = await producto.findAll();
        res.render('products/see_products', { productos,cat });
    } else {
        productos = await producto.findAll({
            where: {
                categoria: cat
            }
        });
        res.render('products/see_products', { productos,cat });
    }
}

export function registrar_producto(req: Request, res: Response) {
    res.render('products/register_products');
}

export async function ver_reporte(req: Request, res: Response) {
    const artesanoId = req.session.user?.id;
    
    let consultaTop = 'SELECT productos.nombre, SUM(public.orden_detalles.cantidad) AS total_cantidad FROM orden_detalles INNER JOIN productos ON "idProducto" = productos.codigo INNER JOIN tallers ON productos."idTaller" = tallers."idTaller" INNER JOIN artesanos ON tallers."idArtesano" = artesanos."idClientEsp" WHERE artesanos."idClientEsp" ='+artesanoId+' GROUP BY productos.codigo ORDER BY total_cantidad DESC LIMIT 5;';
    let consultaGanancias = 'SELECT productos.nombre, SUM(public.orden_detalles.cantidad * productos.precio) AS ganancias FROM orden_detalles INNER JOIN productos ON "idProducto" = productos.codigo INNER JOIN tallers ON productos."idTaller" = tallers."idTaller" INNER JOIN artesanos ON tallers."idArtesano" = artesanos."idClientEsp" WHERE artesanos."idClientEsp" ='+artesanoId+' GROUP BY productos.codigo ORDER BY ganancias DESC LIMIT 5;';
    
    const [mejores, metadata0] = await sequelize.query(consultaTop);
    const [ganancias, metadata1] = await sequelize.query(consultaGanancias);
    //PRODUCTO Y CANTIDAD VENDIDA
    
	res.render('products/reporte',{mejores, ganancias});
}

/* Funciones para el carrito y el pago */
export const pagar_productos = async (req: Request, res: Response) => {
    if(req.cookies.car){
        let cookie_car = JSON.parse(req.cookies.car);
        if(Object.entries(cookie_car).length !== 0){
            let all_products = [];
            for (var i in cookie_car) all_products.push({ codigo: i });
            const productos = await producto.findAll({
                where: {
                    [Op.or]: all_products
                }
            });
            res.render('products/payment-cart',{productos: productos, car: cookie_car});
        }else{
            let cookie_car = null;
            let productos = null;
            res.render('products/payment-cart',{productos: productos, car: cookie_car});
        }
    }else{
        let cookie_car = null;
        let productos = null;
        res.render('products/payment-cart',{productos: productos, car: cookie_car});
    }
}

/** Funciones del back-end: */

export const viewProductos = async (req: Request, res: Response) => {
    const productos = await producto.findAll();
    res.redirect("/products/ver/all");
}

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/img/productos'),
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname).toLocaleLowerCase());
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
    const { nombre, stock, precio, descripcion, categoria } = req.body;
    const newProduct = await producto.create({
        nombre,
        stock,
        foto: req.file?.filename,
        descripcion,
        precio,
        categoria,
        disponibilidad: true,
        idTaller:user.user?.idTaller
    });
    res.redirect("/products/ver/all");
}