import { Router } from 'express';

const router:Router = Router();

router.get('/', (req, res) => {
    res.render('templates/registerClient-template');
});

export default router;