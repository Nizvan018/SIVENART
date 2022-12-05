import { Router } from 'express';
import { registrar_producto, ver_productos,imagenUp, createProduct, viewProductos, pagar_productos } from '../controllers/products.controller';

const router:Router = Router();

router.get('/ver/:categoria', ver_productos);
router.get('/register_product', registrar_producto);
router.get('/viewProducts',viewProductos);
router.get('/shopping-cart', pagar_productos);
router.post('/createProduct',imagenUp,createProduct);

export default router;