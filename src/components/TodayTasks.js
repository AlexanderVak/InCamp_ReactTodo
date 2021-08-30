import React from 'react';
import SingleTask from './SingleTask';

const TodayTasks = ({todayTasks, setTasks}) => {
    return (
        <div>
            {todayTasks.map(task => 
                <SingleTask key={task.id} task={task} tasks={todayTasks} setTasks={setTasks}/>    
            )}
        </div>
    );
}

export default TodayTasks;
