import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import '../../css/App.css';

export default class AddTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
        value: ''
    };
  }

  handleAlert() {
    if (this.props.currentCategory === '') {
      alert('Please, check the current category');
      return;
    }
    if (this.state.value === '') {
      alert('Please, enter the task title');
      return;
    }
    this.props.addTask(this.state.value, this.props.currentCategory);
  }

//
//  getValidationState() {
//    const length = this.state.value.length;
//    if (length > 2) return 'success';
//    else if (length > 1) return 'warning';
//    else if (length > 0) return 'error';
//    return null;
//  }

  render() {
    return (
        <form className="form-group">
          <div className="add-category">
            <input type="text"
            className="form-control"
            name="add-task"
            value={this.state.value}
            onChange={(e) => {
              e.preventDefault();
              console.log(e.target.value);
              this.setState({ value: e.target.value})
              }
            }
            placeholder="Enter task title" />
            <Button
            className="btn btn-warning"
            onClick={(e) => this.handleAlert()}
            >
              Add
            </Button>
          </div>
        </form>
    );
  }
}
