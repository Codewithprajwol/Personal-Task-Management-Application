import React from "react"
import { Status } from "../../createTaskForm/enums/Status";

export type correctStatusOptions=Status.complete | Status.inProgress | Status.todo;
export interface ITaskFooter{
    onStatusChange?:(e:React.ChangeEvent<HTMLInputElement>,id:string)=>void,
    onClick?:(e:React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>,id:string)=>void,
    id:string,
    status?:correctStatusOptions,
}