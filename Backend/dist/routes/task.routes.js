import { Router } from 'express';
const router = Router();
router.get('/tasks', (req, res) => {
    res.send('hello from nepal');
});
export default router;
