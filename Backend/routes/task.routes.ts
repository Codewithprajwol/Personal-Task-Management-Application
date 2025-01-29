import {Request,Response,Router} from 'express'
import { taskController } from '../controller/taskController.js'
import { createValidator } from '../validator/task.validator.js'

const router:Router=Router()

router.get('/tasks',async(req:Request,res:Response)=>{
    let taskcontroller=new taskController();
   const allTasks=await taskcontroller.getAll()
   res.status(200).send(allTasks);
})

router.post('/tasks',createValidator,async(req:Request,res:Response)=>{

})


export default router