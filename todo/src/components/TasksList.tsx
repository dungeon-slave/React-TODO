import { Task } from '../scripts/Tasks';
import '../styles/TaskComponent.css';
import TaskComponent from './TaskComponent';

function TasksList(props: { tasks: Array<Task>, setTasks: any }): JSX.Element 
{
    return (
        <div>
            <>
                {props.tasks.map(currtask => <TaskComponent task={currtask} setFunc={props.setTasks}/>)}
            </>
        </div>

    );
}

export default TasksList;