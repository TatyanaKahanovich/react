import React, { Component } from 'react';
import '../../css/App.css';
import { Button } from 'react-bootstrap';

export default class PopUp extends Component {
  constructor(props) {
    super(props);

   this.state = {
        value: props.popup.name,
        id: props.popup.id
    };
  }

  handleAlert() {
    if (this.state.value === '') {
      alert('Please, enter the Subcategory title');
      return;
    }
    this.props.addCategory(this.state.value, this.state.id, this.props.popup.level);
    this.props.showPopupSubCategory(this.props.id, "", this.props.currentCategory, true);
  }

  render() {
    return (
      <div className="popup form-group">
        <div className='popup-inner'>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            onClick={(e) => this.props.showPopup(this.state.id, this.state.value)}
          >
            &times;
          </button>
          <h1>{
            this.props.popup.subCategory ?
            "Please Enter The Subcategory Title" :
            "Please edit the category title"
          }</h1>
          <label htmlFor="category-name">Title</label>
          <input
            id="category-name"
            className="form-control"
            name="popup"
            value={this.state.value}
            onChange={(e) => {this.setState({ value: e.target.value})}}
            placeholder={
              this.props.popup.subCategory ?
              "Enter SubCategory Title" :
              "Enter Category Title"
            }
            autoFocus
          />
          <button
            className="btn btn-warning"
            onClick={(e) => {
              if(this.props.popup.subCategory) {
                this.handleAlert();
              } else {
                this.props.editCategory(this.state.id, this.state.value);
              }
            }
          }>
            Save
          </button>
          <Button
            onClick={(e) => this.props.showPopup(this.state.id, this.state.value)} >Cancel</Button>
        </div>
      </div>
    );
  }
}
