import React, { useEffect } from 'react';
import SingleTask from './SingleTask';
import "../styles/Tasks.css"
import { useParams } from 'react-router-dom';


const Tasks = () => {

    const {id} = useParams()
    console.log(id, typeof +id);

    // useEffect(() => {
    //     const getTasks = async () => {
    //         try {
    //           const response = await api.get(`/lists/${id}/tasks`)
    //           setTasks(response.data)
    //         } catch (err) {
    //           if (err.response) {
    //             console.log(err.response.data);
    //             console.log(err.response.status);
    //             console.log(err.response.headers);
    //           } else {
    //             console.log(`Error: ${err.message}`);
    //           }
    //         }
    //       }
    //       getTasks()

    // }, [selectedList]);

    const { tasks, setTasks } = useFetchTasks(+id)
    return (
        <div className="tasks-container">
            <div className="tasks">
                {tasks.filter(task => task.listId === +id).map(task => (
                    <SingleTask key={task.id} task={task} setTasks={setTasks} tasks={tasks} />
                ))}
            </div>
        </div>
    );
}

export default Tasks;
