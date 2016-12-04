import { combineReducers } from 'redux';
import todoListReducer from './todoListReducer';
import { routerReducer } from 'react-router-redux'

const reducers = combineReducers({
  routing: routerReducer,
  todoListReducer,
})


export default reducers
