import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar'
import Weather from './components/weather_app/weather'
import Todo from './components/todo_app/todo'
import UserList from './components/users/userList'
import Recipe from './components/recipe_app/recipe'
import RecipeDetail from './components/recipe_app/recipeDetail'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar />
        <Switch>
          <Route path='/weather' component={Weather} />
          <Route path='/todo' component={Todo} />
          <Route path='/users' component={UserList} />
          <Route path='/recipe' component={Recipe} />  
          <Route path='/recipe_detail/:id' component={RecipeDetail} />   

        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
