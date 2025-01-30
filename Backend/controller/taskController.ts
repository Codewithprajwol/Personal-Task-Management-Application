import { Request, Response } from "express";
import { AppDataSource } from "../config/connectdb.js";
import { Task } from "../models/task.entity.js";
import { instanceToPlain } from "class-transformer";
import { validationResult } from "express-validator";
export class TaskController{
    public  async getAll(req:Request,res:Response):Promise<void>{
        let allTasks:Task[]
        try{
             allTasks= await AppDataSource.getRepository(Task).find({
                order:{
                    date:"ASC"
                }
            })
           allTasks=instanceToPlain(allTasks) as Task[];

           res.status(200).json(allTasks)
        }catch(error){
            console.log(error)
            res.status(500).json({err:"Internal Server Error"})
            
        }
        
    }

    public async create(req:Request,res:Response):Promise<void | Response>{
        const {title,description,date,status,priority}=req.body

        const errors=validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()})
    }
    const newTask=new Task()
    newTask.title=title;
    newTask.description=description;
    newTask.date=date;
    newTask.status=status;
    newTask.priority=priority
    let createdTask:Task;
    try{
        createdTask=await AppDataSource.getRepository(Task).save(newTask)
        createdTask=instanceToPlain(createdTask) as Task;
        res.status(201).json(createdTask)

    }catch(error){ 
        console.log('error in create controller',error)
        res.status(500).json({err:'Internal Server Error'})
    }
    }
}

export const taskController=new TaskController()