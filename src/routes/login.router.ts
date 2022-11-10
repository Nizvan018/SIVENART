import {Router} from 'express';

import {login} from '../controllers/login.controller';

const router:Router = Router();

router.get('/', login);

export default router;