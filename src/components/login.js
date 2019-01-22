import React from 'react'
import {connect} from 'react-redux'
import {signingInUser} from '../redux/action'

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
    this.props.signingInUser(this.state)
  }
  render(){
    return(
      <form className="login-form" onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
        <input type="submit" value="Login"/>
      </form>
    )
  }
}

export default connect(null, {signingInUser})(Login)
