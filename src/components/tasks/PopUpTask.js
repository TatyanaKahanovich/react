import React, { Component } from 'react';
import '../../css/App.css';
import { Button } from 'react-bootstrap';

export default class PopUpTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.currentTask.name,
      id: props.currentTask.id,
      description: props.currentTask.description,
      complete: props.currentTask.complete
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
  }

  handleChangeTitle(e) {
    this.setState({value: e.target.value})
  }

  handleChangeDescription(e) {
    this.setState({description: e.target.value})
  }

  handleChangeComplete() {
    this.setState({complete: this.state.complete ? false : true});
  }
  handleAlert() {
    if (this.state.value === '') {
      alert('Please, enter the task title');
      return;
    }
    this.props.editTask(this.state.id, this.state.value, this.state.description, this.state.complete)
  }

  render() {
    return (
      <div className="popup-task form-group">
        <div className='popup-inner'>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            onClick={(e) => this.props.showPopupTask(this.state.id, this.state.value, this.state.description, this.state.complete)}
          >
            &times;
          </button>
          <h1>Please edit the task</h1>
          <div className="check-popup">
              <input type="checkbox"
                 checked={this.state.complete}
                 onChange={(e) => {
                   this.handleChangeComplete();
                   this.props.checkTask(this.state.id, this.state.complete);
                   }
                 }
               />
               <p>Done</p>
           </div>
          <label htmlFor="task-name">Task Title</label>
          <input
            className="form-control"
            name="task-name"
            value={this.state.value}
            onChange={this.handleChangeTitle}
            placeholder="Enter category title"
            autoFocus
          />
          <label htmlFor="task-description">Task Description</label>
          <input className="form-control"  rows="3" value={this.state.description}
            onChange={this.handleChangeDescription}
          />
          <button
            className="btn btn-warning"
            onClick={(e) => this.handleAlert()}
          >
            Save
          </button>
          <Button onClick={(e) => this.props.showPopupTask(this.state.id, this.state.value, this.state.description, this.state.complete)} >Cancel</Button>
        </div>
      </div>
    );
  }
}
