import React from "react"
import {connect} from "react-redux"

import NavBar from '../components/navbar'

class ProfilePage extends React.Component{
  state = {
    searchTerm: '',
    recipeType: 'All'
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
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
                <select onChange={this.handleChange} name="recipeType">
                  <option value="all">All</option>
                  <option value="my-recipes">My Recipes</option>
                  <option value="my-favs">My Favorites</option>
                </select>
              </form>
            </div>
            <div className="recipe-results">
              <h2>Recipes Found:</h2>
              {this.props.user.recipes.map(r => <div style={{marginLeft: "300px"}}>r.name</div>)}
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
