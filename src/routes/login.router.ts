import {Router} from 'express';

import {login, navbar} from '../controllers/login.controller';

const router:Router = Router();

router.get('/', login);
router.get('/navbar', navbar);

export default router;