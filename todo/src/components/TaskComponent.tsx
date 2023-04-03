import { DeleteTaskClick } from '../scripts/ButtonsListeners';
import { Task } from '../scripts/Tasks';
import '../styles/TaskComponent.css';

function TaskComponent(props: { task: Task, setFunc: any }): JSX.Element 
{
    return (
        <div className="Task-component">
            <p placeholder='Name'>{props.task.name}</p>
            <p placeholder='Date'>{props.task.date}</p>

            <button onClick={() => props.setFunc([...DeleteTaskClick(props.task)])}>Delete</button>
        </div>
    );
}

export default TaskComponent;