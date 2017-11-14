import React from 'react';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false
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
    console.log(this.props.onSubmit({todo: this.state}).then(() => this.setState({title: '', body: ''})).then(this.props.clearErrors));
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
