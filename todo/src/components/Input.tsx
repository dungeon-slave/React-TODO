import { AddTaskClick } from '../scripts/ButtonsListeners';
import '../styles/Input.css';

function Input(props: { setFunc: any }) : JSX.Element
{
  return (
        <div className="Input-component">
            <div>
                <input type="text" id="nameInput" placeholder="Task name"/>
                <input type="date" id="dateInput" placeholder="Ending date"/>
            </div>

            <button id="addBtn" onClick={() => props.setFunc([...AddTaskClick()])}>Add task</button>
        </div>
  );
}

export default Input;
