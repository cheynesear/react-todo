import React, {useState, useEffect} from "react";
import "./App.css";
//Importing components
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {

  //States
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos,setFilteredTodos] = useState([]);

  //Effects

  //run once when app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    console.log('useEffect activated')
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //Functions
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  //Save to local storage
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  }
  //Get from local storage
  const getLocalTodos = () => {
    //check if there's something otherwise set empty array
    if(localStorage.getItem('todos') == null) {
      localStorage.setItem('todos',JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
        />
      <TodoList 
        todos={todos} 
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        />
    </div>
  );
}

export default App;
