import { connect } from 'react-redux';
import { receiveTodos, createTodo, removeTodo, fetchTodos } from '../../actions/todo_actions';
import TodoList from './todo_list';
import { allTodos, errors } from '../../reducers/selectors';
import React from 'react';
import { clearErrors } from '../../actions/errors_actions';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: errors(state)
});

const mapDispatchToProps = dispatch => ({
  createTodo: (todo) => dispatch(createTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
