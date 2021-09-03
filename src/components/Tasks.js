import React, { useEffect } from 'react';
import SingleTask from './SingleTask';
import "../styles/Tasks.css"
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { filterTasks, getTasks } from '../store/tasks/actions';
import { useDispatch, useSelector } from 'react-redux';

const Tasks = () => {

    const {id} = useParams()
    const dispatch = useDispatch()

    const history = useHistory()
    const filter = useSelector(state => state.combinedTasksReducers.filter)   



    useEffect(() => {
        dispatch(getTasks(id, filter))
    }, [dispatch, id, filter]);
    const tasks = useSelector(state => state.combinedTasksReducers.tasks)

    // function filterTasks (e){

    //     let value = e.target.value
    //     history.push({
    //         search: `?all=${value}`
    //     })      
    //     const searchParams = new URLSearchParams(filter)
    //     const all = searchParams.get('all')
    //     console.log(all);
    // }

    return (
        <div className="tasks-container">
            <select onChange={(e) => dispatch(filterTasks(e.target.value))} name='filter' id='tasks-filter'>
                <option value='all'> All </option>
                <option value ="unfinished" selected > Unfinished </option>
            </select>
            <div className="tasks">
                {tasks.map(task => (
                    <SingleTask key={task.id} task={task}/>
                ))}
            </div>
        </div>
    );
}

export default Tasks;
