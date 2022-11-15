import { Router } from 'express';

import { register_taller } from '../controllers/register.controller';

const router:Router = Router();

router.get('/taller', register_taller);

export default router;