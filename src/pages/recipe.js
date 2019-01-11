import React from 'react'


const RecipePage = (props) => {



  return(
    <div>
      <div className="recipe-header">
        {props.recipe.name}
      </div>
      <div className="ingredients">
        <ul>
          {props.ingredients.map(ing => (
            <li>{ing.amount} {ing.ingredient.name}</li>
          ))}
        </ul>
      </div>
      <div className="recipe-details">
        <p><span className="bold">CREATED BY:</span> {props.recipe.user}</p>
        <p><span className="bold">FAVORITES:</span> {props.recipe.favorites} <span><3 Favorite</span></p>
        <p><span className="bold">COOKING TIME:</span> {props.recipe.cooking_time}</p>
        <p><span className="bold">NUTRITION INFO:</span> {props.recipe.nutrition_info}</p>
        <p><span className="bold">TAGS:</span> {props.recipe.categories.map(c => {c.name})}</p>
        {props.currentUser === props.recipe.user ? <button onClick={props.editRecipe}>Edit</button> : null}
      </div>
      <div className="directions">
        {props.recipe.directions}
      </div>
    </div>
  )
}
