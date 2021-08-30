import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Lists from './components/Lists';
import Tasks from './components/Tasks';

function App() {
  const initialTasks = [
    {
      id: 1,
      title: 'First task',
      description: 'Its a description',
      done: false,
      dueDate: new Date(),
      listId: 1
    }
  ]

  const initialLists = [
    {
      id: 1,
      title: "First list"
    },
    {
      id: 2,
      title: "Second list"
    },
  ]

  const [tasks, setTasks] = useState(initialTasks);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [todoLists, setTodoLists] = useState(initialLists);
  const [selectedList, setSelectedList] = useState(initialLists[0]);
  const [filter, setFilter] = useState('all');

  return (
    <div className="App">
      <h1>TodoList</h1>
      <div className="row">
        <div className="column" id="list-sidebar">
          <Lists todoLists={todoLists} selectedList={selectedList} setSelectedList={setSelectedList}/>
        </div>

        <div className="column">
          <Tasks tasks={tasks} setTasks={setTasks} selectedList={selectedList}/>

          <Form 
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          dueDate={dueDate}
          setDueDate={setDueDate}
          tasks={tasks}
          setTasks={setTasks}
          selectedList={selectedList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
