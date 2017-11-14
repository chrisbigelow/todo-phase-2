import { receiveStep } from '../../actions/step_actions';
import { stepsByTodoId } from '../../reducers/selectors';


  const mapStateToProps = state => ({
    steps: (todo) => stepsByTodoId(state, todo.id),
    todo_id: (todo) => todo.id
  });

  const mapDispatchToProps = dispatch => ({
    receiveStep: (step) => dispatch(receiveStep(step)),
  });

  export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
