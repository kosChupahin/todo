import React, { Component } from 'react';

import TodoContainer from './containers/Todo'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoContainer/>
      </div>
    )
  }
}

export default App
