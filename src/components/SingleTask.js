import React from 'react';
import { changeStatus } from '../store/tasks/actions';
import '../styles/SingleTask.css'

const SingleTask = ({task}) => {
    const {title, description, done, dueDate} = task

    const isOverdue = () => new Date(task.dueDate) < new Date()
    const showDate = () => !dueDate ? "" : new Date(dueDate).toLocaleDateString('uk')


    return (
        <div className="single-task">
            <div className="task-content">
                <div className="heading">
                    <label className={`${done ? 'task-done' : ''}`}>
                        <input onChange={changeStatus(task.id, task.listId, done)}type="checkbox" name="done" checked={ done }/>
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
