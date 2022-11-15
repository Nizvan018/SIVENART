import { Router } from 'express';

import { register_usuario } from '../controllers/register.controller';

const router:Router = Router();

router.get('/', register_usuario);

export default router;