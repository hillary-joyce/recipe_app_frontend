import React from "react"
import {connect} from "react-redux"

import NavBar from '../components/navbar'
import RecipeCard from '../components/recipeCard'

class RecipePage extends React.Component{
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
    let searchRecipes = this.state.searchTerm === '' ? this.props.recipes :
    this.props.recipes.filter(r => r.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    console.log(searchRecipes)
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

  getCategories = () => {
    let categories = []
    this.props.recipes.forEach(r => {
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
        {this.props.recipes ?
          <React.Fragment>
            <div className="search-sidebar">
              <form className="search-form">
                <label htmlFor="searchTerm">Search for a recipe:</label>
                <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>
              </form>
              <h2>Categories</h2>
              {this.props.recipes ? this.getCategories().map(r => (
                <p className="categories-list" onClick={this.searchCategoriesRecipes}>{r}</p>
              )) :
              null}
                <p className="categories-list" onClick={this.searchCategoriesRecipes}>all</p>
            </div>
            <div className="recipe-results">
              <h2>Find Recipes:</h2>
              <div className="recipe-container">
                {this.props.recipes ? this.searchRecipes().map(r => <RecipeCard key={r.id} recipe={r}/>): null}
              </div>
            </div>
          </React.Fragment>
          : <p>Looking for Recipes...</p>
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return({recipes: state.recipes})
}
export default connect(mapStateToProps)(RecipePage)
