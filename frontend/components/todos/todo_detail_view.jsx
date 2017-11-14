import React from 'react';


const TodoDetailView = ({todo, removeTodo}) => (
  <p>
    {todo.body}
    <button type="button" onClick={() => removeTodo(todo)}>Delete</button>
  </p>
);


export default TodoDetailView;
