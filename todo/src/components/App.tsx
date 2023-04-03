import { useState } from "react";
import Input from "./Input";
import TasksList from "./TasksList";

function App(): JSX.Element 
{
    const [tasks, setTasks] = useState([]);
    return (
        <>
            <Input setFunc={setTasks}/>
            <TasksList tasks={tasks} setTasks={setTasks}/>
        </>
    );
}

export default App;