import React, { Component } from 'react';

import slide1 from './slide_1.png'
import slide2 from './slide_2.png'
class App extends Component {

  render() {
    return (
      <div>
        cachata
        <img src={slide1} />
        non cachata
        <img src={slide2} />
      </div>
    )
  }
}

export default App;
