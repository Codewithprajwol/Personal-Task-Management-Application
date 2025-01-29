import { AppDataSource } from "../config/connectdb.js";
import { Task } from "../models/task.entity.js";

export class taskController{
    constructor(private taskRepository=AppDataSource.getRepository(Task)){}
    public async getAll():Promise<Task[]>{

        try{
            const allTasks:Task[]= await this.taskRepository.find({
                order:{
                    date:"ASC"
                }
            })
            return allTasks

        }catch(error){
            console.log(error)
        }
        
    }
}