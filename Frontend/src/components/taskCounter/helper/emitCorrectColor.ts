import { Status } from "../../createTaskForm/enums/Status"


export const emitCorrectColor=(status:Status):string=>{

    switch(status){
        case Status.todo:
            return 'error.light'
        case Status.inProgress:
            return 'warning.light'
        case Status.complete:
            return 'success.light'
    }

}