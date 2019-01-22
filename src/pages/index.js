import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import SignUp from "../components/signup"
import Login from "../components/login"

import spices from "../images/spices.jpg"

class IndexPage extends React.Component {
  state = {
    loginModal: false
  }

  showModal = () => {
    this.setState({loginModal: !this.state.loginModal})
  }

  render(){
    return(
      <React.Fragment>
        {this.state.loginModal ?
          <div className="login-modal">
            <div className="login-modal-content">
              <div className="close-modal" onClick={this.showModal}>Close X</div>
              <Login />
            </div>
          </div>
        : null
        }
        {this.props.user ?
          <Redirect to="/profile"/>
        :
        <div className="index-page">
          <div className="ingredients-bg" style={{backgroundImage: `url(${spices})`, backgroundSize: 'cover'}}></div>
          <div className="index-content">
            {this.props.user ? <div className="login"><Link to='/profile'>Welcome Back {this.props.user.username}!</Link></div>
              : <div className="login" onClick={this.showModal}>LOGIN</div>}
            <h1 className="index-header">My Recipe Box</h1>
            <p className="header-paragraph">Organize your recipes</p>
            <p className="header-paragraph">Discover something new</p>
            <p className="header-paragraph">Share your family traditions</p>
            <Link className="index-link" to="/recipes">Browse our Recipes</Link>
            <p className="sign-up-header">Sign up now to start sharing your recipes</p>
            <SignUp />
            <p className="have-an-acct">Already have an account? <span className="login-span" onClick={this.showModal}>Login</span></p>
          </div>
        </div>
        }
      </React.Fragment>
    )
  }

}
const mapStateToProps = (state) => {
  return ({user: state.user})
}
export default connect(mapStateToProps)(IndexPage)
