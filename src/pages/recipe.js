import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchingCurrentRecipe} from '../redux/action'

import NavBar from '../components/navbar'

class recipeShow extends React.Component {
  componentDidMount(){
    this.props.fetchingCurrentRecipe(this.props.match.params.id)
  }

  render(){
    console.log(this.props)
    return(
      <React.Fragment>
        <NavBar />
        {this.props.recipe ?
          <React.Fragment>
            <div className="search-sidebar">
              <div className="user-recipe-info">
                <h2>Created By: {this.props.recipe.user.username}</h2>
                <h2>Faves: {this.props.recipe.favorites.length}</h2>
              </div>
              <div className="recipe-details">
                <h2>Cooking Time: {this.props.recipe.cooking_time}</h2>
                <h2>Categories</h2>
                {this.props.recipe.categories.map(cat => <span key={cat.id}>{cat.name}</span>)}
              </div>
              <div className="ingredients">
                <h2>Ingredients:</h2>
                {this.props.recipe.recipe_ingredients.map(ing => (
                  <p key={ing.id}>{ing.amount} {ing.ingredient.name}</p>
                ))}
              </div>
            </div>
            <div className="recipe-instructions">
              <h1 className="recipe-title">{this.props.recipe.name}</h1>
              <p className="recipe-description"></p>
              <h2>Directions:</h2>
              <div className="directions">
                <ol>
                  {this.props.recipe.directions.map(dir => (
                    <li>{dir.text}</li>
                  ))}
                </ol>
              </div>
            </div>
          </React.Fragment>
          : <p>No recipe found :( </p>
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipe: state.currentRecipe
  }
}

export default withRouter(connect(mapStateToProps, {fetchingCurrentRecipe})(recipeShow))
