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
