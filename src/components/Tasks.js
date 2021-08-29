import React from 'react';
import SingleTask from './SingleTask';

const Tasks = ({ tasks, setTasks }) => {
    return (
        <div>
            {tasks.map(task => (
                <SingleTask key={task.id} task={task} setTasks={setTasks} tasks={tasks} />
            ))}
            
        </div>
    );
}

export default Tasks;
