import React from 'react';
import {uniqueId} from '../../util/util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqueId(),
      title: '',
      body: '',
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeBody = this.handleChangeBody.bind(this);
    this.getFormData = this.getFormData.bind(this);
  }

  handleChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  handleChangeBody(e) {
    this.setState({
      body: e.target.value,
    });
  }

  getFormData(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      id: uniqueId(),
      title: '',
      body: '',
    });
  }

  render() {

    return (
      <form className="todo-form">
        <input type="text" name="title" value={this.state.title} onChange={this.handleChangeTitle}/>
        <input type="text" name="body" value={this.state.body} onChange={this.handleChangeBody} />
        <button type="submit" name="button" onClick={this.getFormData}>Add Todo</button>
      </form>
  );
  }

}


export default TodoForm;
