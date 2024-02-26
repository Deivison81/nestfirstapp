import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import {CreateTaskDto, UpdateTaskDto}from './dto/tasks.dto';
import {TasksService}from "./tasks.service";
import path from 'path';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService ){}

    @Get()
    getAllTask(){
        return this.tasksService.getALLTask();
    }

    @Post()
    createTask(@Body()newTask: CreateTaskDto){
        return this.tasksService.createTask(newTask.title, newTask.description);
    }
    @Delete(':id')
    deleteTask(@Param('id')id: string){
        this.tasksService.deleteTask(id)
    }
    @Patch(':id')
    UpdateTask(@Param('id')id: string, @Body() updatedFilds: UpdateTaskDto){
       return this.tasksService.updateTask(id, updatedFilds)
    }


}
