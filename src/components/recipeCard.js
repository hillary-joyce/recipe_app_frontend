import React from 'react'

const RecipeCard = (props) => (
  <div className="recipe-card">
    <div className="recipe-card-header">{props.recipe.name}</div>
    <div className="recipe-details">
      <p className="recipe-creator">{props.recipe.user ? props.recipe.user.name :null}</p>
      {props.recipe.favorites ?<p className="recipe-faves"> {props.recipe.favorites.length} FAVES</p>:null}
    </div>
  </div>
)
export default RecipeCard
