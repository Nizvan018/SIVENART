import { Response, Request } from 'express';
import { producto } from '../models/producto';

/** Función para renderizar la vista para editar producto: */
export const editar_producto = async (req:Request, res:Response) => {
    const id_prod = req.params.id_prod;
    const prod = await producto.findOne( { where: { codigo: id_prod }} );
    
    if(prod != undefined){
        console.log(prod);
        res.render('edit/edit_product', { prod });
    } else{
        new Error('No existe ningún producto');
    }
}

export const actualizar_producto = async (req:Request, res:Response) => {
    const id_prod = req.params.id_prod;
    const { nombre, stock, precio, descripcion, categoria } = req.body;

    producto.update({
        nombre: nombre,
        stock: stock,
        precio: precio,
        descripcion: descripcion,
        categoria: categoria
    }, 
    {
        where: {
            codigo: id_prod
        }
    });

    res.redirect('/information/usuario');
}