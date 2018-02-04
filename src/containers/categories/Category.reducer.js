import {initialState} from '../../initialState';

export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const SHOW_POPUP = 'SHOW_POPUP';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const CHECK_COMPLETE = 'CHECK_COMPLETE';
export const ACTIVE_CATEGORY = 'ACTIVE_CATEGORY';
export const SHOW_POPUP_SUB_CATEGORY = 'SHOW_POPUP_SUB_CATEGORY';
export const OPEN_SUB_CATEGORY = 'OPEN_SUB_CATEGORY';
export const SHOW_CONFIRM = 'SHOW_CONFIRM';

let newLength;

export function categoryReducer(state = initialState, action){
//console.log(initialState);
  switch(action.type) {
    case EDIT_CATEGORY: return {
      ...state,
      categories: state.categories.map(item => {
        if(item.id === action.payload.id){
          item.name = action.payload.name;
        }
        return item;
      }),
      popupVisibility: {
        visibility: state.popupVisibility.visibility ? false : true
      }
    };
    case SHOW_POPUP: return {
      ...state,
      popupVisibility: {
        visibility: state.popupVisibility.visibility ? false : true,
        id: action.payload.id,
        name: action.payload.name,
        currentCategory: action.payload.currentCategory,
        level: action.payload.level
      }
    };
    case SHOW_CONFIRM: return {
      ...state,
      confirmVisibility: {
        visibility: state.confirmVisibility.visibility ? false : true,
        id: action.payload.id,
        currentCategory: action.payload.currentCategory,
      }
    };
    case SHOW_POPUP_SUB_CATEGORY: return {
      ...state,
      popupVisibility: {
        visibility: state.popupVisibility.visibility ? false : true,
        id: action.payload.id,
        name: action.payload.name,
        currentCategory: action.payload.currentCategory,
        subCategory: action.payload.subCategory,
        level: action.payload.level + 1
      }
    };
    case DELETE_CATEGORY:;
      function deleteCategory(id=action.payload.id, newCategories=state.categories) {
        newCategories = newCategories.slice(
          0,
          newCategories.findIndex(item => item.id === id))
          .concat(newCategories.slice(newCategories.findIndex(item => item.id === id) + 1));
        newCategories.map(item => {
          return item.subCategories.map(sub => {
          if(sub === id) {
            item.subCategories.splice(item.subCategories.findIndex(sub => sub === id), 1);
          }
          })
        })

        newCategories.filter(item => item.parent === id).map((item) => {
          return newCategories = deleteCategory(item.id, newCategories);
        });
        newLength = newCategories.length
        return newCategories;
      }
    return {
      ...state,
      categories: (deleteCategory)(),
      currentCategory: newLength > 0 ? action.payload.currentCategory : ""
     };
    case ADD_CATEGORY:
    return {
      ...state,
      categories: [{
          name: action.payload.name,
          id: action.payload.id,
          parent: action.payload.parent,
          subCategories: [],
          visibleSubCategory: false,
          complete: false,
          level: action.payload.level ? action.payload.level : 0
      }].concat(state.categories.map((item) => {
        if(item.id === action.payload.parent) {
          item.subCategories.push(action.payload.id);
        }
        return item;
      }))
    };
    case CHECK_COMPLETE: return {
      ...state,
      categories: state.categories.map(item => {
        if(item.id === action.payload.id){
          action.payload.complete ? item.complete = false : item.complete =true;
        }
        return item;
      })
    };
    case ACTIVE_CATEGORY: return {
      ...state,
      currentCategory: action.payload.currentCategory ? action.payload.id : ""
    };
    case OPEN_SUB_CATEGORY: return {
      ...state,

      categories: state.categories.map(item => {
          if(item.id === action.payload.id){
            item.visibleSubCategory = item.visibleSubCategory ? false : true;
          }
        return item;
        }
      )
    };
    default: return state;
  }
}
