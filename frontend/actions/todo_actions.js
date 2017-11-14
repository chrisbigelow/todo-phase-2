import { apiFetchTodos, apiCreateTodo } from '../util/todo_api_util';
import { receiveErrors } from './errors_actions';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo
});

export const fetchTodos = () => {
  return (dispatch) => {
    return apiFetchTodos()
    .then((todos) => {
      dispatch(receiveTodos(todos));
    });
  };
};

export const createTodo = (todo) => (dispatch) => {
  const apiCAll = apiCreateTodo(todo);
  console.log( apiCAll);
    return apiCAll.then(
      newTodo => dispatch(receiveTodo(newTodo)),
      err => dispatch(receiveErrors(err.responseJSON))
    );
  };
