import React from 'react'
import {Link} from 'react-router-dom'

const RecipeCard = (props) => (
  <Link style={{textDecoration: "none"}}to={`/recipe/show/${props.recipe.id}`}>
  <div className="recipe-card">
    <div className="recipe-card-header">{props.recipe.name}</div>
    <div className="recipe-details">
      <p className="recipe-creator">{props.recipe.user ? props.recipe.user.name :null}</p>
      {props.recipe.favorites ? <p className="recipe-faves"> {props.recipe.favorites.length} FAVES</p>:null}
    </div>
  </div>
  </Link>
)
export default RecipeCard
