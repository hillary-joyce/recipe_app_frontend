import React from 'react'
import {connect} from 'react-redux'

import SearchBar from "../components/searchBar"
import SignUp from "../components/signup"
import RecipeCard from "../components/recipeCard"



const IndexPage = (props) => (
  <React.Fragment>
    <div className="header">My Recipe Box</div>
    <div className="container">
      <SearchBar />
      <h3>Popular Recipes</h3>
      <div className="recipe-container">
        {props.recipes !== [] ? props.recipes.map(r => <RecipeCard key={r.id} recipe={r}/>) : null}
      </div>
      <p>Want to start sharing recipes? Create an account:</p>
      <SignUp />
    </div>
  </React.Fragment>
)

const mapStateToProps = (state) => {
  return {recipes: state.recipes}
}
export default connect(mapStateToProps)(IndexPage)
