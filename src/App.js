import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import LoginPage from "./pages/login"
import Profile from './pages/profile'
import ShowRecipe from './pages/recipe'
import AddRecipe from './pages/recipeForm'
import RecipeSearch from './pages/recipeSearch'



class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={LoginPage}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/recipes" component={RecipeSearch}/>
          <Route path="/recipe/new" component={AddRecipe}/>
          <Route path="/recipe/show/:id" component={ShowRecipe}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
