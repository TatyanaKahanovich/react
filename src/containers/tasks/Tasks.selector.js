import { bindActionCreators  } from 'redux';
import { connect } from 'react-redux';
import { Task } from './Tasks.index';
import { editTask, showPopupTask, addTask, checkTask, showTask, taskSearch, taskShowDone } from './Tasks.actions';

const mapStateToProps = state => ({
 currentCategory: state.categoryReducer.currentCategory,
 tasks: state.tasksReducer.tasks,
 popupTaskVisibility: state.tasksReducer.popupTaskVisibility,
 showComplete: state.tasksReducer.showComplete,
 searchValue: state.tasksReducer.searchValue
});

const mapDispatchToProps = dispatch => ({
  editTask: bindActionCreators(editTask, dispatch),
  showPopupTask: bindActionCreators(showPopupTask, dispatch),
  addTask: bindActionCreators(addTask, dispatch),
  checkTask: bindActionCreators(checkTask, dispatch),
  showTask: bindActionCreators(showTask, dispatch),
  taskSearch: bindActionCreators(taskSearch, dispatch),
  taskShowDone: bindActionCreators(taskShowDone, dispatch)

})

export default connect(mapStateToProps, mapDispatchToProps)(Task);

