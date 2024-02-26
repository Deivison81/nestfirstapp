import { Injectable } from '@nestjs/common';
import {tasks, taskStatus} from "./tasks.entitys";
import { UpdateTaskDto } from './dto/tasks.dto';



@Injectable()
export class TasksService {

  private tasks:tasks[]=  [{
        id: '1',
        title:'first task',
        description:'some tak',
        status: taskStatus.PENDING
    }]

    getALLTask(){
        return this.tasks;
    }
    createTask(title: string, description: string){
        const task = {
            id: new Date().toISOString(),
            title,
            description,
            status: taskStatus.PENDING
        }
        this.tasks.push(task)
        return task;
    }

    getTaskById(id: string){
       return this.tasks.find(tasks => tasks.id === id)
    }

    updateTask(id:string, updateFields: UpdateTaskDto): tasks{
        const task = this.getTaskById(id);
        const new_task = Object.assign(task, updateFields);
        this.tasks.map(task => task.id === id ? new_task: task);
        return new_task;
    }
    deleteTask(id: string){
       this.tasks= this.tasks.filter(task => task.id !== id)
    }
}
