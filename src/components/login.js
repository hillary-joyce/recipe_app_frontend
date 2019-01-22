import React from 'react'
import {connect} from 'react-redux'
import {signingInUser} from '../redux/action'
import {withRouter} from 'react-router-dom'

class Login extends React.Component {
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
    if(this.state.username !== "" && this.state.password !== ""){
      this.props.signingInUser(this.state)
    } else {
      console.log("please enter a username and password")
    }
  }
  render(){
    return(
      <form className="login-form" onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
        <input type="submit" value="LOGIN" className="login-submit-btn"/>
      </form>
    )
  }
}

export default withRouter(connect(null, {signingInUser})(Login))
