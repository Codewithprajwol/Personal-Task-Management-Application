import React from "react"
import { Status } from "../../createTaskForm/enums/Status";

export type correctStatusOptions=Status.complete | Status.inProgress | Status.todo;
export interface ITaskFooter{
    onStatusChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    onClick?:(e:React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>)=>void,
    id:string,
    status?:correctStatusOptions,
}