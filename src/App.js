import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import api from './api/todo'
import './App.css';
import Form from './components/Form';
import Lists from './components/Lists';
import Tasks from './components/Tasks';
import TodayTasks from './components/TodayTasks';

export const isTodayOverdue = task => task.dueDate <= new Date() && !task.done
function App() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [todoLists, setTodoLists] = useState([]);
  const [selectedList, setSelectedList] = useState({});
  const [todayTasks, setTodayTasks] = useState([]);
  // const [filter, setFilter] = useState('all');
  
  useEffect(() => {

    const getLists = async () => {
      try {
        const response = await api.get('/lists')

        setTodoLists(response.data)
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }
    getLists();
  }, []);
  

  return (
    <Router>
      <div className="App">
        <h1>TodoList</h1>
        <Link className="today-link" to="/">HOME</Link>
        <Link className="today-link" to="/today">TODAY</Link>
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
            
            <Route exact path="/lists/:id"> 

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
