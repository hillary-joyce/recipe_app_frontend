import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import {fetchingRecipes} from './redux/action'
import {connect} from "react-redux"


import NavBar from './components/navbar'

import LoginPage from "./pages/login"
import Profile from './pages/profile'
import ShowRecipe from './pages/recipe'
import AddRecipe from './pages/recipeForm'
import RecipeSearch from './pages/recipeSearch'
import HomePage from './pages'



class App extends Component {

  componentDidMount(){
    this.props.fetchingRecipes()
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/recipes" component={RecipeSearch}/>
            <Route path="/recipe/new" component={AddRecipe}/>
            <Route path="/recipe/show/:id" component={ShowRecipe}/>
          </Switch>
      </div>
    );
  }
}
export default connect(null, {fetchingRecipes})(App)
