import React from 'react';
import SingleTask from './SingleTask';
import "../styles/Tasks.css"
import { useParams } from 'react-router-dom';

const Tasks = ({ tasks, setTasks, selectedList }) => {

    const {id} = useParams()
    console.log(id);
    return (
        <div className="tasks-container">
            <div className="tasks">
                {tasks.filter(task => task.listId === selectedList.id).map(task => (
                    <SingleTask key={task.id} task={task} setTasks={setTasks} tasks={tasks} />
                ))}
            </div>
        </div>
    );
}

export default Tasks;
