import { Router } from 'express';
import { ver_aboutus } from '../controllers/aboutus.controller';
const router:Router = Router();

router.get('/',ver_aboutus);

export default router;