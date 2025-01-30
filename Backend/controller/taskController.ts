import { Request, Response } from "express";
import { AppDataSource } from "../config/connectdb.js";
import { Task } from "../models/task.entity.js";
import { instanceToPlain, plainToInstance } from "class-transformer";
import { validationResult } from "express-validator";
import { UpdateResult } from "typeorm";
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

    public async create(req:Request,res:Response):Promise<void>{
        const {title,description,date,status,priority}=req.body

        const errors=validationResult(req);

    if(!errors.isEmpty()){
        res.status(400).json({error:errors.array()})
        return;
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

    public async update(req:Request,res:Response):Promise<void>{
       
        const error=validationResult(req)
        if(!error.isEmpty()){
            res.status(400).json(error.array())
            return 
        }
        let task:Task|null=null;
        try{
            task=await AppDataSource.getRepository(Task).findOne({where:{id:req.body.id}})

            if(!task){
                res.status(400).json({err:'task Id doesnot found'});
            }
        }catch(error){
            console.log('error in update controller',error)
            res.status(500).json({err:"internal server error"})
        }
        let updateTask:UpdateResult;

        try{
            updateTask=await AppDataSource.getRepository(Task).update(req.body.id,plainToInstance(Task,{status:req.body.status}))
            updateTask=instanceToPlain(updateTask) as UpdateResult
            res.status(200).json(updateTask);
        }catch(error){
            console.log('error while updating',error)
            res.status(500).json({err:"internal Server error"})
        }

    }
}

export const taskController=new TaskController()