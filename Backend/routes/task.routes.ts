import {Request,Response,Router} from 'express'
import { taskController } from '../controller/taskController.js'
import { createValidator } from '../validator/task.validator.js'
import { validationResult } from 'express-validator'
const router:Router=Router()

router.get('/tasks',async(req:Request,res:Response)=>{
    let taskcontroller=new taskController();
   const allTasks=await taskcontroller.getAll()
   res.status(200).send(allTasks);
})
//@ts-ignore
router.post('/tasks',createValidator,async(req:Request,res:Response)=>{
    const errors=validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()})
    }
})
 

export default router