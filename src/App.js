import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Lists from './components/Lists';
import Tasks from './components/Tasks';
import TodayTasks from './components/TodayTasks';

export const isTodayOverdue = task => task.dueDate <= new Date() && !task.done
function App() {
  const initialTasks = [
    {
      id: 1,
      title: 'First task',
      description: 'Its a description',
      done: false,
      dueDate: new Date(),
      listId: 1
    },
    {
      id: 2,
      title: 'Second task',
      description: 'Its a description for second task',
      done: false,
      dueDate: new Date("2021-08-17"),
      listId: 1
    },
    {
      id: 3,
      title: 'Third task',
      description: 'Its a description',
      done: false,
      dueDate: new Date("2021-09-12"),
      listId: 1
    },
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

  const initialTodayTasks = initialTasks.filter(isTodayOverdue)

  const [tasks, setTasks] = useState(initialTasks);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [todoLists, setTodoLists] = useState(initialLists);
  const [selectedList, setSelectedList] = useState(initialLists[0]);
  const [todayTasks, setTodayTasks] = useState(initialTodayTasks);
  const [filter, setFilter] = useState('all');

  return (
    <Router>
      <div className="App">
        <h1>TodoList</h1>
        <Switch>
          <div className="row">
            <div className="column" id="list-sidebar">
              <div className="list-fixed-sidebar">
                <Lists todoLists={todoLists} selectedList={selectedList} setSelectedList={setSelectedList}/>
              </div>
            </div>

            <Route exact path="/today">
              <div className="column">
                <TodayTasks todayTasks={todayTasks} setTasks={setTasks} todoLists={todoLists}/> 
              </div>
            </Route>
            
            <Route exact path="/"> 
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
                setTodayTasks={setTodayTasks}
                />
              </div>
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
