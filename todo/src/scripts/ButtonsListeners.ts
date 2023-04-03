import { Task, tasks } from "./Tasks";

export function AddTaskClick() : Array<Task>
{
    tasks.push(new Task
        (
            Math.floor(Math.random() * 1000),
            (document.getElementById("nameInput") as HTMLInputElement).value, 
            (document.getElementById("dateInput") as HTMLInputElement).value
        ));
    
    return tasks;
}

export function DeleteTaskClick(task: Task) : Array<Task>
{
    tasks.splice(tasks.findIndex((task1) => task1.id === task.id), 1);

    return tasks;
}