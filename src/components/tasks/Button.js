import React, { Component } from 'react';
//import '../../css/App.css';
import { Button } from 'react-bootstrap';

export default class ButtonTask extends Component {
  render() {
    return (
      <div className="buttons">
        <Button
        onClick={(e)=>
          this.props.showPopupTask(this.props.id, this.props.name, this.props.description, this.props.complete)
        }>
          <span className="glyphicon glyphicon-pencil"></span>
        </Button>
      </div>
    );
  }
}
