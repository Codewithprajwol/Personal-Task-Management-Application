import { Status } from "../../createTaskForm/enums/Status"



export const emitCorrectStatus=(status:Status):string=>{
   switch(status){
    case Status.complete:
        return 'success.light'
    case Status.inProgress:
        return 'warning.light'
    case Status.todo:
        return 'error.light'
   }
}