import { Router } from 'express';
import { taskController } from '../controller/taskController.js';
import { createValidator } from '../validator/task.validator.js';
const router = Router();
router.get('/tasks', async (req, res) => {
    let taskcontroller = new taskController();
    const allTasks = await taskcontroller.getAll();
    res.status(200).send(allTasks);
});
router.post('/tasks', createValidator, async (req, res) => {
});
export default router;
