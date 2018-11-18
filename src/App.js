import React, { Component } from 'react';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Order from './components/Order';
import logo from './assets/images/logo.png'
import './layout.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="logo-header">
          <div className="logo">
          <img src={logo}/>
          </div>
          <div className="logo-topic">PALOPIC Order System
          </div>
        </div>
        <div className="bg-img-cover">
          <Router>
          <React.Fragment>
            <div>
              <Route path="/" exact component={Home} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/order" component={Order} />
            </div>
            </React.Fragment>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
