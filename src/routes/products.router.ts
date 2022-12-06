import { Router } from 'express';
import { registrar_producto, ver_productos,imagenUp, createProduct, viewProductos, pagar_productos } from '../controllers/products.controller';
import { createLogginMiddleware } from '../middlewares/loggin.middleware';
const authloggin = createLogginMiddleware("artesano");
const authloggin2 = createLogginMiddleware("cliente");
const router:Router = Router();

router.get('/ver/:categoria', ver_productos);
router.get('/register_product',authloggin,registrar_producto);
router.get('/viewProducts',viewProductos);
router.get('/shopping-cart',authloggin2, pagar_productos);
router.post('/createProduct',authloggin,imagenUp,createProduct);

export default router;