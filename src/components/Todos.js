import React from 'react';

const Todos = (props) => {
  
    let { todos, deleteTodo } = props;

    const todoList = todos.length ? (
      todos.map(todo => (
        <div className="collection-item" key={todo.id}>
          <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>          
        </div>
      ))
    ) : (
      <p className="center">You have no todo's left</p>
    )
    
  return(
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;