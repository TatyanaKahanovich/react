import {initialState} from '../../initialState';

export const EDIT_TASK = 'EDIT_TASK';
export const SHOW_POPUP_TASK = 'SHOW_POPUP_TASK';
export const ADD_TASK = 'ADD_TASK';
export const CHECK_COMPLETE_TASK = 'CHECK_COMPLETE_TASK';
export const SHOW_TASK = 'SHOW_TASK';
export const TASK_SEARCH = 'TASK_SEARCH';
export const TASK_SHOW_DONE = 'TASK_SHOW_DONE';

export function tasksReducer(state=initialState, action){
  switch(action.type) {
    case EDIT_TASK: return {
      ...state,
      tasks: state.tasks.map(item => {
        if(item.id === action.payload.id){
          item.name = action.payload.name;
          item.description = action.payload.description;
          item.complete = action.payload.complete;
        }
        return item;
      }),
      popupTaskVisibility: {
        visibility: state.popupTaskVisibility.visibility ? false : true
      }
    };
    case SHOW_POPUP_TASK: return {
      ...state,
      popupTaskVisibility: {
        visibility: state.popupTaskVisibility.visibility ? false : true,
        id: action.payload.id,
        name: action.payload.name,
        description: action.payload.description,
        complete: action.payload.complete
      }
    };
    case ADD_TASK: return {
      ...state,
      tasks: [{
          name: action.payload.name,
          id: Date.now(),
          category: action.payload.currentCategory,
          description: "Something interesting",
          complete: false
      }].concat(state.tasks),
      currentCategory: action.payload.currentCategory
    };
    case CHECK_COMPLETE_TASK: return {
      ...state,
      tasks: state.tasks.map(item => {
        if(item.id === action.payload.id){
          action.payload.complete ? item.complete = false : item.complete =true;
        }
        return item;
      })
    };
    case SHOW_TASK: return {
      ...state,
      tasks: state.tasks.map(item => {
        if(item.id === action.payload.id){
          action.payload.complete ? item.complete = false : item.complete =true;
        }
        return item;
      }),
      currentCategory: action.payload.currentCategory
    };
    case TASK_SEARCH: return {
      ...state,
      searchValue: action.payload.value,
    };
    case TASK_SHOW_DONE: return {
      ...state,
      showComplete: action.payload.showComplete ? false : true,
    };
    default: return state;
  }
}
