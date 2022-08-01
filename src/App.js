// App.js

import React, { Component } from "react";
import Main from './Components/Main'

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