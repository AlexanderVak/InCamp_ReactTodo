import React from 'react';
import { useDispatch } from 'react-redux';
import { changeStatus } from '../store/tasks/actions';
import '../styles/SingleTask.css'

const SingleTask = ({task}) => {
    const {title, description, done, dueDate} = task
    
    // const deleteHandler = () => {
    //     setTasks(tasks.filter(item => item.id !== task.id))
    // }

    // const checkboxHandler = () => {
    //     setTasks(tasks.map(item => {
    //         if (item.id === task.id) {
    //             return{
    //                 ...item, done: !item.done
    //             }
    //         }
    //         return item
    //     }))
    // }
    const dispatch = useDispatch()

    const isOverdue = () => new Date(task.dueDate) < new Date()
    const showDate = () => !dueDate ? "" : new Date(dueDate).toLocaleDateString('uk')

    return (
        <div className="single-task">
            <div className="task-content">
                <div className="heading">
                    <label className={`${task.done ? 'task-done' : ''}`}>
                        <input onChange={changeStatus(task.id, task.listId, task.done)}type="checkbox" name="done" checked={ done }/>
                        {title}
                    </label>
                </div>
                <p className={`task-due-date ${!task.done && isOverdue() ? 'task-overdue' : ''}`}>{ showDate() }</p>
                <p className="task-description">{description}</p>
                
            </div>
            <button className="task-delete-btn" onClick={console.log("delete")}>Delete</button>
        </div>
    );
}

export default SingleTask;
