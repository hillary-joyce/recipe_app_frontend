import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import {fetchingRecipes} from './redux/action'
import {connect} from "react-redux"

import Profile from './pages/profile'
import ShowRecipe from './pages/recipe'
import AddRecipe from './pages/recipeForm'
import RecipeSearch from './pages/recipeSearch'
import HomePage from './pages'

import "./App.scss"


class App extends Component {

  componentDidMount(){
    this.props.fetchingRecipes()
  }

  render() {
    return (
      <Router>
      <div className="App">
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/recipes" component={RecipeSearch}/>
            <Route path="/recipe/new" component={AddRecipe}/>
            <Route path="/recipe/show/:id" component={ShowRecipe}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default connect(null, {fetchingRecipes})(App)
