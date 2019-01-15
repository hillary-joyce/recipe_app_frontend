import React from 'react'
import {connect} from 'react-redux'
import {creatingNewUser} from "../redux/action"

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

    if(this.state.password === this.state.confirmPassword){
      this.props.creatingNewUser(data)
    } else {
      this.setState({errorMessage: "Passwords Don't Match"})
    }
  }

  render(){
    return(
      <form className="sign-up-form" onSubmit={this.handleSignUp}>
        <div className="error-messages">{this.state.errorMessage}</div>
        <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleChange}/>
        <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange}/>
        <input type="password" placeholder="confirm password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange}/>
        <input className="form-submit" type="submit"/>
      </form>
    )
  }
}

export default connect(null, {creatingNewUser})(SignUp)
