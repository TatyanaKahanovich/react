import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import logo from './images/logo.png';

import Head from './Head';
import Progress from './components/categories/Progress';
import Category from './containers/categories/Category.selector';

import {store} from './store';

import './css/App.css';
import './css/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Provider store={store} >
          <div className="container">
            <Router>
              <div>
              <Head />
              <Progress />
              <Route exact path="/" render={() =>
                <Route component={Category}/>
              }/>
              </div>
            </Router>
          </div>
        </Provider>
    );
  }
}

export default App;
