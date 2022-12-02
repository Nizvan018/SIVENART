import { Router } from "express";
import { createClient, register_client} from "../controllers/singin.controller";

const router:Router = Router();

router.get('/', register_client);
router.post('/createclient', createClient);

export default router;