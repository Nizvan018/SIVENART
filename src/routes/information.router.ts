import { Router } from 'express';
import { no_permission, ver_aboutus, ver_talleres, ver_usuario } from '../controllers/information.controller';
const router:Router = Router();

import { createSinginMiddleware } from '../middlewares/singin.middleware';
const authloggin = createSinginMiddleware();

router.get('/aboutus',ver_aboutus);
router.get('/talleres',ver_talleres);
router.get('/usuario',authloggin,ver_usuario);
router.get('/no-autorizados', no_permission);

export default router;