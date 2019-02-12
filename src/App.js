import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar'
import Weather from './components/weather_app/weather'
import Todo from './components/todo_app/todo'

class App extends Component {
  render() {
    return (
      // <Router>
      //   <Route path='/nav' component={Navbar} />
      // </Router>
      <div>
        <Navbar />
        {/* <Weather /> */}
        
        <Todo />
      </div>
      
    );
  }
}

export default App;
