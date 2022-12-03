import { Router } from 'express';
import { ver_aboutus, ver_talleres } from '../controllers/information.controller';
const router:Router = Router();

router.get('/aboutus',ver_aboutus);
router.get('/talleres',ver_talleres);

export default router;