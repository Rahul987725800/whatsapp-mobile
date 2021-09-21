import { combineReducers } from 'redux';
import generalReducer from './reducers/generalReducer';
import messageReducer from './reducers/messageReducer';
const rootReducer = combineReducers({
  message: messageReducer,
  general: generalReducer,
});
export default rootReducer;
