import { Router } from 'express';
import { createValidator } from '../validator/task.validator.js';
import { taskController } from '../controller/taskController.js';
const router = Router();
router.get('/tasks', taskController.getAll);
//@ts-ignore
router.post('/tasks', createValidator, taskController.create);
export default router;
