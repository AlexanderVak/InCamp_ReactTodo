import React, { useEffect } from 'react';
import SingleTask from './SingleTask';
import "../styles/Tasks.css"
import { useParams } from 'react-router-dom';
import { getTasks } from '../store/tasks/actions';
import { useDispatch, useSelector } from 'react-redux';

const Tasks = () => {

    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTasks(id))
    }, [dispatch, id]);
    const tasks = useSelector(state => state.tasks)

    return (
        <div className="tasks-container">
            <div className="tasks">
                {tasks.map(task => (
                    <SingleTask key={task.id} task={task}/>
                ))}
            </div>
        </div>
    );
}

export default Tasks;
