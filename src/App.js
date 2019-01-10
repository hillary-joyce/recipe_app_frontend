import React, { Component } from 'react';
import LoginPage from "./pages/login"
import SignUp from "./components/signup"

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignUp />
      </div>
    );
  }
}

export default App;
