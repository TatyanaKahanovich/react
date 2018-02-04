import { bindActionCreators  } from 'redux';
import { connect } from 'react-redux';
import { Category } from './Category.index';
import { editCategory, deleteCategory, addCategory, showPopup, checkComplete,
    activeCategory, showPopupSubCategory, openSubCategory, showConfirm } from './Category.actions';

const mapStateToProps = state => ({
 currentCategory: state.categoryReducer.currentCategory,
 categories: state.categoryReducer.categories,
 popupVisibility: state.categoryReducer.popupVisibility,
 confirmVisibility: state.categoryReducer.confirmVisibility
});

const mapDispatchToProps = dispatch => ({
  editCategory: bindActionCreators(editCategory, dispatch),
  showPopup: bindActionCreators(showPopup, dispatch),
  showPopupSubCategory: bindActionCreators(showPopupSubCategory, dispatch),
  deleteCategory: bindActionCreators(deleteCategory, dispatch),
  addCategory: bindActionCreators(addCategory, dispatch),
  checkComplete: bindActionCreators(checkComplete, dispatch),
  activeCategory: bindActionCreators(activeCategory, dispatch),
  openSubCategory: bindActionCreators(openSubCategory, dispatch),
  showConfirm: bindActionCreators(showConfirm, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Category);

