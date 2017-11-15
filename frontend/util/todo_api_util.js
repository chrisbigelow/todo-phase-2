export const apiFetchTodos = function fetchTodos() {
  return $.ajax({
    url: 'http://localhost:3000/api/todos',
    method: 'GET'
  });
};

export const apiCreateTodo = function createTodo(todo) {
  return $.ajax({
    url: 'http://localhost:3000/api/todos',
    method: 'POST',
    data: todo
  });
};

export const apiUpdateTodo = function updateTodo(todo) {
  return $.ajax({
    url: `http://localhost:3000/api/todos/${todo.todo.id}`,
    method: 'PATCH',
    data: todo
  });
};

export const apiDeleteTodo = function deleteTodo(todo) {
  return $.ajax({
    url: `http://localhost:3000/api/todos/${todo.id}`,
    method: 'DELETE',
    data: todo
  });
};
