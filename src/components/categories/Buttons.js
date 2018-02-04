import React, { Component } from 'react';
//import '../../css/App.css';
import { Button } from 'react-bootstrap';

export default class Buttons extends Component {
  render() {
    return (
      <div className="buttons">
        <Button onClick={(e)=>
          this.props.showPopup(this.props.id, this.props.name)
        }>
         <span className="glyphicon glyphicon-pencil"></span>
        </Button>
        <Button onClick={(e)=> {
          this.props.showConfirm(this.props.id, this.props.currentCategory);
//            console.log(this.props.id, this.props.currentCategory);
//          this.props.deleteCategory(this.props.id, this.props.currentCategory);
//          this.props.activeCategory(this.props.id, false);
          e.stopPropagation();
        }
        }>
          <span className="glyphicon glyphicon-trash"></span>
        </Button>
        <Button onClick={(e)=> {
          this.props.showPopupSubCategory(this.props.id, this.props.currentCategory, true, this.props.level);
        }}>
          <span className="glyphicon glyphicon-plus"></span>
        </Button>
      </div>
    );
  }
}
