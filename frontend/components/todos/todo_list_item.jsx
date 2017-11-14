import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

const doneHelper = (todo, receiveTodo) => {
  todo.done = !todo.done;
  receiveTodo(todo);
};

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      showDetail: false
    };
    this.showDetail = this.showDetail.bind(this);
  }

  showDetail (event) {
    event.preventDefault();
    this.setState((prevState) => ({
      showDetail: !prevState.showDetail,
    }));
  }

  render() {
    const {todo, receiveTodo} = this.props;
    return (
      <li>
      <button onClick={this.showDetail} >{todo.title}</button>
      <button type="button" onClick={() => doneHelper(todo, receiveTodo)}>{todo.done ? "Undo" : "Done"}</button>
      {this.state.showDetail ? <TodoDetailViewContainer todo={todo}/> : '' }
      </li>
    );
  }
}

export default TodoListItem;
