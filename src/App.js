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
      dueDate: new Date()
    }
  ]

  const [tasks, setTasks] = useState(initialTasks);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [lists, setLists] = useState('all');

  return (
    <div className="App">
      <h1>TodoList</h1>
      <Lists lists={lists} setLists={setLists}/>
      <Form 
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        dueDate={dueDate}
        setDueDate={setDueDate}
        tasks={tasks}
        setTasks={setTasks}
      />
      <Tasks tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
