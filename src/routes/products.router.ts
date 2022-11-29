import { Router } from 'express';
import { registrar_producto, ver_productos,imagenUp, createProduct, viewProductos  } from '../controllers/products.controller';

const router:Router = Router();

router.get('/', ver_productos);
router.get('/register_product', registrar_producto);
router.post('/createProduct',imagenUp,createProduct);
router.get('/viewProducts',viewProductos);

export default router;