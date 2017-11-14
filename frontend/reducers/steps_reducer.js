import {RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP} from '../actions/step_actions';

const initialState =  {
    1: { // this is the step with id = 1
      id: 1,
      title: 'walk to store',
      done: false,
      todo_id: 1
    },
    2: { // this is the step with id = 2
      id: 2,
      title: 'buy soap',
      done: false,
      todo_id: 1
    }
  };

const stepsReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_STEPS:
      let newState = {};
      action.steps.forEach((step) => {newState[step.id] = step;});
      return newState;
    case RECEIVE_STEP:
      let newerState = {};
      newerState[action.step.id] = action.step;
      return Object.assign({}, state, newerState);
    case REMOVE_STEP:
      let rState = Object.assign({}, state);
      delete rState[action.step.id];
      return rState;
    default:
      return state;
  }
};


export default stepsReducer;
