import React from 'react';
import {connect} from 'react-redux';

import {initialState} from '../../initialState';

class Progress extends React.Component {
  render() {
    const categoryTotal = this.props.categories ? this.props.categories.length : 0;
    let completedCategory = 0;
    let categorySorted = [];

    function sortCategories(props) {
      props.categories.map( category => {
        let taskSorted = [];
        props.tasks.map(task => {
          if(category.id === task.category) {
            return taskSorted.push(task);
          }
        })
        return taskSorted.length ? categorySorted[category.id] = taskSorted : completedCategory += 1;
      });
    }

    function calculateCompleteCategories(props) {
      categorySorted.map(category => {
        if(category.every(elem => elem.complete)) {
          return completedCategory += 1;
        }
      })
    }

    sortCategories(this.props);
    calculateCompleteCategories(this.props);

    let result = Math.round(completedCategory/categoryTotal*100);
    result = isNaN(result) ? 0 :result;

    return (
      <div className="progress progress-bar-wrapper">
        <div
          className="progress-bar bg-warning"
          role="progressbar"
          style={{width: result + '%'}} aria-valuenow={result} aria-valuemin="0" aria-valuemax="100">{result}%</div>
      </div>
    )
  }
}

const mapStateToProps = (state=initialState) => ({
  tasks: state.tasksReducer.tasks,
  categories: state.categoryReducer.categories,
  showComplete: state.tasksReducer.showComplete
});

export default connect(mapStateToProps)(Progress);
