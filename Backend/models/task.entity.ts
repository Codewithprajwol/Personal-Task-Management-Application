import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Priority } from "./enums/Priority.js";
import { Status } from "./enums/Status.js";


@Entity()
export class Task{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({
        type:'text',
    })
    title:string;

    @Column({
        type:'varchar',
        length:255,
    })
    date:string;
    @Column({
        type:'longtext',
    })
    description:string;

    @Column({
        type:'enum',
        enum:Priority,
        default:Priority.normal
    })
    priority:Priority;

    @Column({
        type:'enum',
        enum:Status,
        default:Status.todo
    })
    status:Status;

}