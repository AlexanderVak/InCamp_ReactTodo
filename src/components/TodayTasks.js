import React from 'react';
import { Link } from 'react-router-dom';
import SingleTask from './SingleTask';

const TodayTasks = ({todayTasks, setTasks, todoLists}) => {
    const getCurrentList = (task) => todoLists.filter(list => list.id === task.listId)[0]
    return (
        <>
            {todayTasks.map(task => (
                <div>
                    <h4><Link className="today-link" key={getCurrentList(task).id} to={`/lists/${task.listId}`}>{getCurrentList(task).title}</Link></h4>
                    <SingleTask key={task.id} task={task} tasks={todayTasks} setTasks={setTasks}/> 
                </div>
            ))}
        </>
    );
}

export default TodayTasks;
