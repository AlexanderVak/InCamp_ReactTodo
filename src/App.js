import './App.css';
import Task from './components/Task';

function App() {
  const tasks = [
    {
      title: 'First task',
      description: 'Its a description',
      done: false,
      dueDate: new Date()
    }
  ]

  return (
    <div className="App">
      <h1>TodoList</h1>
      <Task task={tasks[0]}/>
    </div>
  );
}

export default App;
