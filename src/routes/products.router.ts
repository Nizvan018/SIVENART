import { Router } from 'express';
import { registrar_producto, ver_productos } from '../controllers/products.controller';

const router:Router = Router();

router.get('/', ver_productos);
router.get('/register_product', registrar_producto);

export default router;