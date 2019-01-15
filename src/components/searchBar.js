import React from "react"

class SearchBar extends React.Component {
  constructor(){
    super()
    this.state = {
      search: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(
      <input type="text" className="search-bar" placeholder="Search for Recipes..." value={this.state.currentSearch} name="search" onChange={this.handleChange}/>
    )
  }
}

export default SearchBar
