import { Status } from "../../createTaskForm/enums/Status"

export type correctStatustype=Status.completed | Status.inProgress |Status.todo

export const emitCorrectStatus=(status:correctStatustype):string=>{
   switch(status){
    case Status.completed:
        return 'success.light'
    case Status.inProgress:
        return 'warning.light'
    case Status.todo:
        return 'error.light'
   }
}