import { combineReducers } from 'redux';
import authentication from './authentication';
import loading from './loading';

const rootReducer = combineReducers({
  authentication,
  loading
});

export default rootReducer;