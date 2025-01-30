import { correctStatusOptions } from "../../task/interfaces/ITaskFooter";
import { ITaskApi } from "../interfaces/ITaskApi";

export function countTask(tasks:ITaskApi[],status:correctStatusOptions):number{
    if(!Array.isArray(tasks)){
        return 0
    }

    const taskCount=tasks.filter((task:ITaskApi)=>{
        return task.status==status
    })

    return taskCount.length;
}