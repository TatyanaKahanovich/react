import React, { Component } from 'react';
import '../../css/App.css';
import { Button } from 'react-bootstrap';

export default class Confirm extends Component {
  render() {
    return (
      <div className="popup form-group">
        <div className='popup-inner confirm'>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            onClick={(e) => this.props.showConfirm()}
          >
            &times;
          </button>
          <h1>Do you really want to delete the category?</h1>
          <button
            className="btn btn-warning"
            onClick={(e) => {
              this.props.deleteCategory(this.props.confirmVisibility.id, this.props.confirmVisibility.currentCategory);
              this.props.activeCategory(this.props.confirmVisibility.id, false);
              this.props.showConfirm();
            }
          }>
            Delete
          </button>
          <Button
            onClick={(e) => this.props.showConfirm()} >Cancel</Button>
        </div>
      </div>
    );
  }
}
