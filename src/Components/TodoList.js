import React from "react";
//import components
import Todo from './Todo';

const TodoList = ({todos, setTodos, filteredTodos}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
          {/* //render a new component of Todo for each new item in todos */}
          {filteredTodos.map((todo) => (
              <Todo 
              todos={todos} 
              setTodos={setTodos}
              key={todo.id}
              todo={todo} 
              text={todo.text}
              filteredTodos={filteredTodos}/>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;