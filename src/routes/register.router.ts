import { Router } from 'express';

import { register_usuario , createUser, register_taller, createTaller,avatarUp } from '../controllers/register.controller';
import { createLogginMiddleware } from '../middlewares/loggin.middleware';

const authloggin = createLogginMiddleware("administrador");
const router:Router = Router();

router.get('/', );
router.get('/register_user', authloggin, register_usuario);
router.get('/register_taller', register_taller);
router.post('/createUser', createUser);
router.post('/createTaller', avatarUp,createTaller);

export default router;