import React from 'react'

const IndexPage = (props) => (
  <React.Fragment>
    <div className="header">Recipe DB</div>
    <SearchBar />
    {props.featuredRecipes.map(r => (
      <RecipeCard recipe={r}/>
    ))}
    <SignUp />
  </React.Fragment>
)
