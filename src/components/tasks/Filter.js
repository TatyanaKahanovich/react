import React, { Component } from 'react';
import {connect} from 'react-redux';
import {taskSearch} from '../../containers/tasks/Tasks.actions';
import {taskShowDone} from '../../containers/tasks/Tasks.actions';
import {initialState} from '../../initialState';

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <form>
          <input type="checkbox" onChange={(e)=>{
            this.props.taskShowDone(this.props.showComplete);
          }}
          />
          <p>Show done</p>
          <input
            className="form-control form-control-lg"
            name="search"
            placeholder="Search"
            onChange={(e) =>{
              e.preventDefault();
              this.props.taskSearch(e.target.value)
            }}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state=initialState) => ({
  tasks: state.tasksReducer.tasks,
  showComplete: state.tasksReducer.showComplete
});

const mapActionsToProps = ({
  taskSearch: taskSearch,
  taskShowDone: taskShowDone
});

export default connect(mapStateToProps, mapActionsToProps)(Filter);

