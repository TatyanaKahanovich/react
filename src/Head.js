import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import logo from './images/logo1.png';

import Filter from './components/tasks/Filter';

import './css/App.css';
import './css/bootstrap.css';

class Head extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <header className="page-header">
          <div className="row">
              <img src={logo} className="col-lg-2" alt="logo" />
              <h1 className="col-lg-7">To-Do List</h1>
              <Filter className="col-lg-3"/>
          </div>
        </header>
      </div>
    );
  }
}

export default Head;

