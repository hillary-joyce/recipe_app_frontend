import React from "react"
import {connect} from "react-redux"

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
      <input type="text" placeholder="search" value={this.state.currentSearch} name="search" onChange={this.handleChange}/>
    )
  }
}

export default SearchBar
