import { Router } from "express";
import { register_client, singin } from "../controllers/singin.controller";

const router:Router = Router();

router.get('/', singin);
router.post('/register_client', register_client);

export default router;