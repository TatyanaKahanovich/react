import { EDIT_TASK, ADD_TASK, SHOW_POPUP_TASK, CHECK_COMPLETE_TASK, SHOW_TASK, TASK_SEARCH, TASK_SHOW_DONE } from './Tasks.reducer';

export function editTask(id, name, description, complete) {
  return function(dispatch){
    return dispatch({
      type: EDIT_TASK,
      payload: {
        id,
        name,
        description,
        complete
      }
    });
  };
}

export function showPopupTask(id, name, description, complete) {
  return function(dispatch){
    return dispatch({
      type: SHOW_POPUP_TASK,
      payload: {
        id,
        name,
        description,
        complete
      }
    });
  };
}

export function addTask(name, currentCategory) {
  return function(dispatch){
    return dispatch({
      type: ADD_TASK,
      payload: {
        name,
        currentCategory
      }
    });
  };
}

export function checkTask(id, complete) {
  return function(dispatch){
    return dispatch({
      type: CHECK_COMPLETE_TASK,
      payload: {
        id,
        complete
      }
    });
  };
}

export function showTask(id) {
  return function(dispatch){
    return dispatch({
      type: SHOW_TASK,
      payload: {
        id
      }
    });
  };
}

export function taskSearch(value) {
  return function(dispatch){
    return dispatch({
      type: TASK_SEARCH,
      payload: {
        value
      }
    });
  };
}

export function taskShowDone(showComplete) {
  return function(dispatch){
    return dispatch({
      type: TASK_SHOW_DONE,
      payload: {
        showComplete
      }
    });
  };
}
