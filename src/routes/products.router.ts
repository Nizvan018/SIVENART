import { Router } from 'express';
import { registrar_producto } from '../controllers/products.controller';

const router:Router = Router();

router.get('/', );
router.get('/register_product', registrar_producto);

export default router;