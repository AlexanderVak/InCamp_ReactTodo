import React from 'react';
import SingleTask from './SingleTask';
import "./Tasks.css"

const Tasks = ({ tasks, setTasks, selectedList }) => {
    return (
        <div className="tasks-container">
            <div className="tasks">
                {tasks.filter(task => task.id === selectedList.id).map(task => (
                    <SingleTask key={task.id} task={task} setTasks={setTasks} tasks={tasks} />
                ))}
            </div>
        </div>
    );
}

export default Tasks;
