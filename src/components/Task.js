import React from 'react';

const Task = (props) => {
    const {title, description, done, dueDate} = props.task
    console.log(props.task);
    return (
        <div className="single-task">
            <div className="heading">
                <input type="checkbox" name="done" checked={ done }/>
                <label>{title}</label>
            </div>
            <p className="task-due-date">{dueDate.toLocaleDateString('uk')}</p>
            <p className="task-description">{description}</p>
        </div>
    );
}

export default Task;
