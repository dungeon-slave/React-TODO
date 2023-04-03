export class Task
{
    public id:   number;
    public name: string;
    public date: string;
    
    constructor(id: number, name: string, date: string)
    {
        this.id = id;
        this.name = name;
        this.date = date;
    }
}

export let tasks: Array<Task> = [];
