import React from 'react'

import SearchBar from "../components/searchBar"
import SignUp from "../components/signup"


const IndexPage = (props) => (
  <React.Fragment>
    <div className="header">Recipe DB</div>
    <SearchBar />
    <SignUp />
  </React.Fragment>
)

export default IndexPage


// {props.featuredRecipes.map(r => (
//   <RecipeCard recipe={r}/>
// ))}
