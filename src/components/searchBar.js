import React from "react"
import {connect} from "react-redux"


class RecipeSearchForm extends React.Component {
  state = {
    searchTerm: "",
    recipeType: "All"
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(
      <input type="text" className="search-bar" placeholder="Search for Recipes..." value={this.state.currentSearch} name="searchTerm" onChange={this.handleChange}/>
      <select>
        <option value="user">My Recipes</option>
      </select>
    )
  }
}

export default RecipeSearchForm
