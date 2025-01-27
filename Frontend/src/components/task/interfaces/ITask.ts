import { ITaskDescription } from "./ITaskDescription";
import { ITaskFooter } from "./ITaskFooter";
import { ITaskHeader } from "./ITaskHeader";

import {correctStatustype} from '../helper/emitCorrectStatus'
export interface ITask extends ITaskDescription,ITaskHeader,ITaskFooter{
    id?:string,
    priority?:string,
    status?:correctStatustype,
}