import { AppDataSource } from "../config/connectdb.js";
import { Task } from "../models/task.entity.js";
import { instanceToPlain } from "class-transformer";
export class taskController{
    constructor(private taskRepository=AppDataSource.getRepository(Task)){}
    public async getAll():Promise<Record<string,any>[]>{
        let allTasks:Task[]
        try{
             allTasks= await this.taskRepository.find({
                order:{
                    date:"ASC"
                }
            })
           allTasks=instanceToPlain(allTasks) as Task[];
           return allTasks;

        }catch(error){
            console.log(error)
            return []
            
        }
        
    }
}