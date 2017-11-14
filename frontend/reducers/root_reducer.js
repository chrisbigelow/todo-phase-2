import { combineReducers } from 'redux';
import todos from './todos_reducer';
import steps from './steps_reducer';

const rootReducer = combineReducers({todos, steps});

export default rootReducer;
