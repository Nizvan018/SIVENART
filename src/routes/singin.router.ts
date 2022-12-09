import { Router } from "express";
import { correo_invalido, createClient, register_client} from "../controllers/singin.controller";

const router:Router = Router();

router.get('/', register_client);
router.post('/createclient', createClient);
router.get('/correo_invalido', correo_invalido);

export default router;