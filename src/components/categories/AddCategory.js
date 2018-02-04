import React, { Component } from 'react';
//import '../../css/App.css';
import { Button } from 'react-bootstrap';

export default class AddCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
        value: ''
    };
  }

  handleAlert() {
    if (this.state.value === '') {
      alert('Please, enter the category title');
      return;
    }
    this.props.addCategory(this.state.value, null)
  }

  render() {
//    console.log(this.props);
//    debugger;
    return (
      <form className="form-group">
        <div className="add-category">
          <input
              type="text"
              className="form-control"
              name="add"
              value={this.state.value}
              onChange={(e) => {e.preventDefault(); this.setState({ value: e.target.value})}}
              placeholder="Enter category title"
          />
          <Button className="btn btn-warning" onClick={(e) => this.handleAlert()} >Add</Button>
        </div>
      </form>
    );
  }
}
