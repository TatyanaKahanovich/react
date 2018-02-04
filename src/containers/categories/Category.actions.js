import {EDIT_CATEGORY, DELETE_CATEGORY, ADD_CATEGORY, SHOW_POPUP, CHECK_COMPLETE, ACTIVE_CATEGORY,
    SHOW_POPUP_SUB_CATEGORY, OPEN_SUB_CATEGORY, SHOW_CONFIRM} from './Category.reducer';

export function editCategory(id, name) {
  return function(dispatch){
    return dispatch({
      type: EDIT_CATEGORY,
      payload: {
        id,
        name
      }
    });
  };
}

export function showPopup(id, name, level=0) {
  return function(dispatch){
    return dispatch({
      type: SHOW_POPUP,
      payload: {
        id,
        name,
        level
      }
    });
  };
}

export function showPopupSubCategory(id, currentCategory, subCategory, level) {
  return function(dispatch){
    return dispatch({
      type: SHOW_POPUP_SUB_CATEGORY,
      payload: {
        id,
        currentCategory,
        subCategory,
        level,
        name: ""
      }
    });
  };
}
export function showConfirm(id, currentCategory) {
  return function(dispatch){
    return dispatch({
      type: SHOW_CONFIRM,
      payload: {
        id,
        currentCategory
      }
    });
  };
}

export function deleteCategory(id, currentCategory) {
  return function(dispatch){
    return dispatch({
      type: DELETE_CATEGORY,
      payload: {
        id,
        currentCategory
      }
    });
  };
}

export function addCategory(name, parent, level=0) {
  return function(dispatch){
    return dispatch({
      type: ADD_CATEGORY,
      payload: {
        name,
        parent,
        level,
        id: Date.now()
      }
    });
  };
}

export function checkComplete(id, complete) {
  return function(dispatch){
    return dispatch({
      type: CHECK_COMPLETE,
      payload: {
        id,
        complete
      }
    });
  };
}

export function activeCategory(id, currentCategory) {
  return function(dispatch){
    return dispatch({
      type: ACTIVE_CATEGORY,
      payload: {
        id,
        currentCategory
      }
    });
  };
}

export function openSubCategory(id, parent) {
  return function(dispatch){
    return dispatch({
      type: OPEN_SUB_CATEGORY,
      payload: {
        id,
        parent
      }
    });
  };
}
