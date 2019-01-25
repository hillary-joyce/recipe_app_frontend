import React from "react"
import {connect} from "react-redux"

import NavBar from '../components/navbar'
import RecipeCard from '../components/recipeCard'

class ProfilePage extends React.Component{
  state = {
    searchTerm: '',
    recipeType: 'all',
    category: 'all'
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  searchRecipes = () => {
    let searchRecipes = this.state.searchTerm === '' ? this.props.user.recipes :
    this.props.user.recipes.filter(r => r.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    let categoryRecipes = []
    if(this.state.category !== 'all'){
      searchRecipes.forEach(r => {
        r.categories.forEach(cat => {
          if(cat.name === this.state.category){
            categoryRecipes.push(r)
          }
        })
      })
      return(categoryRecipes)
    } else {
      return(this.props.user.recipes)
    }
  }

  searchFavorites = () => {
    let favRecipes = this.state.searchTerm === '' ? this.props.user.favorites :
    this.props.user.favorites.filter(r => r.recipe.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    let categoryRecipes =[]
    return favRecipes
  }

  getCategories = () => {
    let categories = []
    this.props.user.recipes.forEach(r => {
      r.categories.forEach(cat => {
        if(categories.indexOf(cat.name) === -1){
          categories.push(cat.name)
        }
      })
    })
    return categories
  }

  searchCategoriesRecipes = (e) => {
    this.setState({category: e.target.innerText.toLowerCase()})
  }

  render(){
    console.log(this.state.searchTerm)
    return(
      <React.Fragment>
        <NavBar />
        {this.props.user ?
          <React.Fragment>
            <div className="search-sidebar">
              <form className="search-form">
                <label htmlFor="searchTerm">Search for a recipe:</label>
                <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>
              </form>
              <h2>Categories</h2>
              {this.props.user.recipes ? this.getCategories().map(r => (
                <p className="categories-list" onClick={this.searchCategoriesRecipes}>{r}</p>
              )) :
              null}
                <p className="categories-list" onClick={this.searchCategoriesRecipes}>all</p>
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
