import React from "react"
import {connect} from "react-redux"

import NavBar from '../components/navbar'
import RecipeCard from '../components/recipeCard'

class ProfilePage extends React.Component{
  state = {
    searchTerm: '',
    recipeType: 'all',
    category: 'all',
    favorites: []
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getFavorites = () => {
    fetch(`http://localhost:3000/api/v1/favorites/${this.props.user.id}`)
    .then(r => r.json())
    .then(d => {
      let recipes = d.map(fave => fave.recipe)
      this.setState({favorites: recipes})
    })
  }

  componentDidMount(){
    if(this.props.user){
      this.getFavorites()
    }
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
      return(searchRecipes)
    }
  }

  searchFavorites = () => {
    let favRecipes = this.state.searchTerm === '' ? this.state.favorites :
    this.state.favorites.filter(r => r.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    let categoryFavRecipes =[]
    if(this.state.category !== 'all'){
      favRecipes.forEach(r => {
        r.categories.forEach(cat => {
          if(cat.name === this.state.category){
            categoryFavRecipes.push(r)
          }
        })
      })
      return(categoryFavRecipes)
    }
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
    this.state.favorites.forEach(r => {
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
                <p key={r} className="categories-list" onClick={this.searchCategoriesRecipes}>{r}</p>
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
              {this.props.user.favorites ? this.searchFavorites().map(r => <RecipeCard key={r.id} recipe={r}/>): <p> No Favorites Found :(</p>}
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
