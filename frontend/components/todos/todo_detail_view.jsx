import React from 'react';


const TodoDetailView = ({todo, deleteTodo}) => (
  <p>
    {todo.body}
    <button type="button" onClick={() => deleteTodo(todo)}>Delete</button>
  </p>
);


export default TodoDetailView;
