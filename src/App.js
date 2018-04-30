import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Data from './components/Data';
import Other from './components/Other';
import {Link, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/data" component={Data}/>
        <Route exact path="/other" component={Other}/>
        <ul className="Menu">
        <Link to="/">  <li>Home</li></Link>
        <Link to="data">  <li>Data</li></Link>
        <Link to="other">  <li>Other</li></Link>
        </ul>
      </div>
    );
  }
}

export default App;
