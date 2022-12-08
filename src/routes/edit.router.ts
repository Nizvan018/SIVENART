import { Router } from 'express';
import { actualizar_producto, editar_producto } from '../controllers/edit.controller';

const router:Router = Router();

router.get('/producto/:id_prod', editar_producto);
router.post('/producto/update/:id_prod', actualizar_producto);

export default router;