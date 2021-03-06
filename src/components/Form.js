import React from 'react';
import { isTodayOverdue } from '../App';
import './Form.css'

const increment = (init = 3) => () => ++init
const genId = increment()
const Form = ({
    title,
    setTitle,
    description,
    setDescription,
    dueDate,
    setDueDate,
    tasks,
    setTasks,
    selectedList,
    setTodayTasks
}) => {

    const titleHandler = (event) => {
        setTitle(event.target.value)
    }

    const descriptionHandler = (event) => {
        setDescription(event.target.value)
    }

    const dueDateHandler = (event) => {
        setDueDate(new Date (event.target.value))
    }

    const submitHandler = (event) => {
        event.preventDefault()
        setTasks([
            ...tasks,
            {
                id: genId(),
                title: title,
                description: description,
                done: false,
                dueDate: dueDate,
                listId: selectedList.id
            }
        ])
        setTodayTasks(tasks.filter(isTodayOverdue))
        setTitle("")
        setDescription("")
        setDueDate("")
    }

    return (
        <form onSubmit={submitHandler}>
            <input onChange={titleHandler} value={title} type="text" name="title" placeholder="Title" required></input>
            <input onChange={descriptionHandler} value={description} type="text" name="description" placeholder="Description"></input>
            <input onChange={dueDateHandler} value={dueDate} type="date" name="dueDate"></input>
            <button type="submit">Add Task</button>
        </form>
    );
}

export default Form;
