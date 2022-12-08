import { Router } from 'express';

const router:Router = Router();

router.get('/', (req, res) => {
    res.redirect('products/ver/all');
});

export default router;