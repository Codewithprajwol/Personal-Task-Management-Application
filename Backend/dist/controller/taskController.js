import { AppDataSource } from "../config/connectdb.js";
import { Task } from "../models/task.entity.js";
import { instanceToPlain, plainToInstance } from "class-transformer";
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
            res.status(400).json({ error: errors.array() });
            return;
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
    async update(req, res) {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            res.status(400).json(error.array());
            return;
        }
        let task = null;
        try {
            task = await AppDataSource.getRepository(Task).findOne({ where: { id: req.body.id } });
            if (!task) {
                res.status(400).json({ err: 'task Id doesnot found' });
            }
        }
        catch (error) {
            console.log('error in update controller', error);
            res.status(500).json({ err: "internal server error" });
        }
        let updateTask;
        try {
            updateTask = await AppDataSource.getRepository(Task).update(req.body.id, plainToInstance(Task, { status: req.body.status }));
            updateTask = instanceToPlain(updateTask);
            res.status(200).json(updateTask);
        }
        catch (error) {
            console.log('error while updating', error);
            res.status(500).json({ err: "internal Server error" });
        }
    }
}
export const taskController = new TaskController();
