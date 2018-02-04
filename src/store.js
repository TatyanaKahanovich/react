import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {categoryReducer} from './containers/categories/Category.reducer';
import {tasksReducer} from './containers/tasks/Tasks.reducer';

const combiner = combineReducers({
  categoryReducer,
  tasksReducer
});

const middleware = applyMiddleware(thunk);

export const store = createStore(combiner, middleware);
window.store = store;

Object.defineProperty(window, 'state', {
  get() {
    return store.getState();
  }
})

export default store;
