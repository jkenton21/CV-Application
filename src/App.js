// App.js

import React, { Component } from "react";
import Main from './Components/Main'
import Header from './Components/Header'
import Footer from './Components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header>CV App</Header>
        <Main />
        <Footer> by jkenton21 </Footer>
      </div>
    )
  }
}

export default App;