import { AppDataSource } from "../config/connectdb.js";
import { Task } from "../models/task.entity.js";
import { instanceToPlain } from "class-transformer";
import { validationResult } from "express-validator";
export class TaskController {
    async getAll(req, res) {
        let allTasks;
        try {
            allTasks = await AppDataSource.getRepository(Task).find({
                order: {
                    date: "ASC"
                }
            });
            allTasks = instanceToPlain(allTasks);
            res.status(200).json(allTasks);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ err: "Internal Server Error" });
        }
    }
    async create(req, res) {
        const { title, description, date, status, priority } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }
        const newTask = new Task();
        newTask.title = title;
        newTask.description = description;
        newTask.date = date;
        newTask.status = status;
        newTask.priority = priority;
        let createdTask;
        try {
            createdTask = await AppDataSource.getRepository(Task).save(newTask);
            createdTask = instanceToPlain(createdTask);
            res.status(201).json(createdTask);
        }
        catch (error) {
            console.log('error in create controller', error);
            res.status(500).json({ err: 'Internal Server Error' });
        }
    }
}
export const taskController = new TaskController();
