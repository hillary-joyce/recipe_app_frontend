import React from 'react'

export default class SignUp extends React.Component {
  constructor(){
    super()
    this.state = {
      username: "",
      password: "",
      confirmPassword: ""
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
      fetch('http://localhost:3000/api/v1/users', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      }).then(r => r.json())
      .then(d=>console.log(d))
    }

  }

  render(){
    return(
      <form onSubmit={this.handleSignUp}>
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
        <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange}/>
        <input type="submit"/>
      </form>
    )
  }
}
