import {Router} from 'express'
import { createValidator, updateValidator } from '../validator/task.validator.js'
import { taskController } from '../controller/taskController.js'
const router:Router=Router()

router.get('/tasks',taskController.getAll)
router.post('/tasks',createValidator,taskController.create)
router.put('/tasks',updateValidator,taskController.update)
 

export default router