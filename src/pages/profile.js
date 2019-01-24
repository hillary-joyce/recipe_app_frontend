import React from "react"
import {connect} from "react-redux"

import NavBar from '../components/navbar'
import RecipeCard from '../components/recipeCard'

class ProfilePage extends React.Component{
  state = {
    searchTerm: '',
    recipeType: 'all'
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.searchRecipes()
  }

  searchRecipes = () => {
    return(this.state.searchTerm === '' ? this.props.user.recipes :
    this.props.user.recipes.filter(r => r.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())))
  }

  searchFavorites = () => {
    console.log(this.props.user.favorites);
    return(this.state.searchTerm === '' ? this.props.user.favorites :
    this.props.user.favorites.filter(r => r.recipe.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())))
  }

  render(){
    console.log(this.state.searchTerm)
    return(
      <React.Fragment>
        <NavBar />
        {this.props.user ?
          <React.Fragment>
            <div className="search-sidebar">
              <form className="search-form" onSubmit={this.handleSubmit}>
                <label htmlFor="searchTerm">Search for a recipe:</label>
                <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>
                <select onChange={this.handleChange} name="recipeType">
                  <option value="all">All</option>
                  <option value="my-recipes">My Recipes</option>
                  <option value="my-favs">My Favorites</option>
                </select>
                <input type="submit" value="find recipes"/>
              </form>
            </div>
            <div className="recipe-results">
              <h2>My Recipes:</h2>
              <div className="recipe-container">
                {this.props.user.recipes ? this.searchRecipes().map(r => <RecipeCard key={r.id} recipe={r}/>): null}
              </div>
              <h2>My Favorites:</h2>
              <div className="recipe-container">
                {this.props.user.favorites ? this.searchFavorites().map(r => <RecipeCard key={r.id} recipe={r.recipe}/>): <p> No Favorites Found :(</p>}
              </div>
            </div>
          </React.Fragment>
          :
          <p style={{paddingTop: "100px"}}>Ooops! You need to be Logged in to see this page!</p>
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return({user: state.user})
}
export default connect(mapStateToProps)(ProfilePage)
