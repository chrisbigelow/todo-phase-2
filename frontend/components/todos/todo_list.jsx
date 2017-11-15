import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component{
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render () {
    const {todos, createTodo, removeTodo, updateTodo} = this.props;
    return (
      <div>
        <ul> {this.props.errors.map(error => <li key={error}>{error}</li>)} </ul>
        <ul>
          {todos.map((todo) => <TodoListItem key={todo.id} todo={todo} updateTodo={updateTodo} />) }
        </ul>
        <TodoForm onSubmit={createTodo} clearErrors={this.props.clearErrors}/>
     </div>
   );
  }


}

export default TodoList;
