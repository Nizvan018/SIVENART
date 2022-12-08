import { Router } from 'express';

const router:Router = Router();

router.get('/', (req, res) => {
    res.render('information/aboutus');
});

export default router;
