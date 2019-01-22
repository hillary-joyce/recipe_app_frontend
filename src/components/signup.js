import React from 'react'
import {connect} from 'react-redux'
import {creatingNewUser} from "../redux/action"
import {withRouter} from "react-router-dom"

class SignUp extends React.Component {
  constructor(){
    super()
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      errorMessage: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignUp = (e) => {
    e.preventDefault()
    let data = {
      user: {
        username: this.state.username,
        password: this.state.password
      }
    }
    this.props.creatingNewUser(data)
  }

  render(){
    return(
      <form className="sign-up-form" onSubmit={this.handleSignUp}>
        <div className="error-messages">{this.state.errorMessage}</div>
        <label htmlFor="username">Create a Username</label>
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
        <label htmlFor="password">Choose a Password</label>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange}/>
        <input className="form-submit" type="submit" value="JOIN"/>
      </form>
    )
  }
}

export default withRouter(connect(null, {creatingNewUser})(SignUp))
