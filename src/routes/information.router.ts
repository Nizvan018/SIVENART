import { Router } from 'express';
import { ver_aboutus, ver_talleres, ver_usuario } from '../controllers/information.controller';
const router:Router = Router();

import { createLogginMiddleware } from '../middlewares/loggin.middleware';
const authloggin = createLogginMiddleware("administrador");

router.get('/aboutus',ver_aboutus);
router.get('/talleres',ver_talleres);
router.get('/usuario',authloggin, ver_usuario);

export default router;