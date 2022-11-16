import { Router } from 'express';

import { register_usuario , createUser, register_taller } from '../controllers/register.controller';

const router:Router = Router();

router.get('/', );
router.get('/register_user', register_usuario);
router.get('/register_taller', register_taller);
router.post('/createUser', createUser);

export default router;