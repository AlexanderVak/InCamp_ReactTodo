import React from 'react';
const increment = (init = 1) => () => ++init
const genId = increment()
const Form = ({
    title,
    setTitle,
    description,
    setDescription,
    dueDate,
    setDueDate,
    tasks,
    setTasks
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
                dueDate: dueDate
            }
        ])
        setTitle("")
        setDescription("")
        setDueDate("")
    }

    return (
        <form>
            <input onChange={titleHandler} value={title} type="text" name="title" placeholder="Title" required></input>
            <input onChange={descriptionHandler} value={description} type="text" name="description" placeholder="Description"></input>
            <input onChange={dueDateHandler} value={dueDate} type="date" name="dueDate"></input>
            <button onClick={submitHandler} type="submit">Add Task</button>
        </form>
    );
}

export default Form;
