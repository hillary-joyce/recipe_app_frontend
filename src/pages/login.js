import React from "react"
import {connect} from "react-redux"
import {setCurrentUser} from '../redux/action'

class LoginPage extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data.error){
        alert("incorrect username or password")
      }else{
        localStorage.setItem('token', data.jwt)
        this.props.setCurrentUser(data)
      }
    })
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" onChange={this.handleChange} value={this.state.password}/>
        <input type="submit"/>
      </form>
    )
  }
}




export default connect(null, {setCurrentUser})(LoginPage)
