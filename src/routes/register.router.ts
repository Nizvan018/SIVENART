import { Router } from 'express';

import { register_usuario , createUser, register_taller, createTaller,avatarUp, viewTalleres, viewUsers } from '../controllers/register.controller';

const router:Router = Router();

router.get('/', );
router.get('/register_user', register_usuario);
router.get('/register_taller', register_taller);
router.post('/createUser',avatarUp, createUser);
router.post('/createTaller', avatarUp, createTaller);
router.get('/viewTalleres', viewTalleres);
router.get('/viewUsers', viewUsers);

export default router;