import React from "react";
import TodoItem from "./TodoItem";
// import {Link} from "react-router-dom";
import Navigation from "./Navigation";
// import todos from './todos.json';

const Todo = (
  {
    todos = [
      {title: 'Todo 1'},
      {title: 'Todo 2'},
      {title: 'Todo 3'},
      {title: 'Todo 4'},
      {title: 'Todo 5'},
    ]
  }) => {
  return(
    <div>
      <Navigation/>
      <h1>ToDo</h1>
      <ul>
        {
          todos.map((todo) => {
            return(
              <TodoItem todo={todo}/>
            )
          })
        }
        <TodoItem todo={{title:'Buy the milk!!!!', status:'Completed'}}/>
        <TodoItem todo={{title:'Pick up the kids', status:'Completed'}}/>
        <TodoItem todo={{title:'Walk the dogs', status:'Completed'}}/>
        <TodoItem todo={{title:'Make dinner', status:'Completed'}}/>
      </ul>
    </div>
  );
};

export default Todo;