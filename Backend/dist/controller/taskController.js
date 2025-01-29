import { AppDataSource } from "../config/connectdb.js";
import { Task } from "../models/task.entity.js";
export class taskController {
    taskRepository;
    constructor(taskRepository = AppDataSource.getRepository(Task)) {
        this.taskRepository = taskRepository;
    }
    async getAll() {
        try {
            const allTasks = await this.taskRepository.find({
                order: {
                    date: "ASC"
                }
            });
            return allTasks;
        }
        catch (error) {
            console.log(error);
        }
    }
}
