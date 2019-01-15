import React from 'react'

const RecipeCard = (props) => (
  <div className="recipe-card">
    <div className="recipe-card-header">{props.recipe.name}</div>
    <div className="recipe-details">
      <p className="recipe-creator">{props.recipe.user.name}</p>
      <p className="recipe-faves">{props.recipe.favorites.length} faves</p>
    </div>
  </div>
)
export default RecipeCard
