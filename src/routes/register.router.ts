import { Router } from 'express';

import { register_usuario , createUser } from '../controllers/register.controller';

const router:Router = Router();

router.get('/', register_usuario);
router.post('/createUser', createUser);

export default router;