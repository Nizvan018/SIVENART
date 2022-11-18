import {Router} from 'express';

import {login, navbar,auth} from '../controllers/login.controller';

const router:Router = Router();

router.get('/', login);
router.post('/auth', auth);
router.get('/navbar', navbar);

export default router;