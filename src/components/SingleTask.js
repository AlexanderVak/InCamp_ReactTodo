import React from 'react';

const SingleTask = ({task, setTasks, tasks}) => {
    const {title, description, done, dueDate} = task
    
    const deleteHandler = () => {
        setTasks(tasks.filter(item => item.id !== task.id))
    }

    const checkboxHandler = () => {
        setTasks(tasks.map(item => {
            if (item.id === task.id) {
                return{
                    ...item, done: !item.done
                }
            }
            return item
        }))
    }

    return (
        <div className="single-task">
            <div className="heading">
               
                <label className={`${task.done ? 'done-task' : ''}`}>
                    <input onChange={checkboxHandler}type="checkbox" name="done" checked={ done }/>
                    {title}
                </label>
            </div>
            <p className="task-due-date">{dueDate === "" ? "" : dueDate.toLocaleDateString('uk') }</p>
            <p className="task-description">{description}</p>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
}

export default SingleTask;
