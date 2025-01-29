import { AppDataSource } from "../config/connectdb.js";
import { Task } from "../models/task.entity.js";
import { instanceToPlain } from "class-transformer";
export class taskController {
    taskRepository;
    constructor(taskRepository = AppDataSource.getRepository(Task)) {
        this.taskRepository = taskRepository;
    }
    async getAll() {
        let allTasks;
        try {
            allTasks = await this.taskRepository.find({
                order: {
                    date: "ASC"
                }
            });
            allTasks = instanceToPlain(allTasks);
            return allTasks;
        }
        catch (error) {
            console.log(error);
            return [];
        }
    }
}
