import React, { Component } from 'react';
import seal from './seal.jpg';
import pig from './pig.jpg';
import fancy from './fancy.png';
import turtle from './turtle.jpg';
import CardContainer from './CardContainer.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [fancy, fancy, turtle, seal, pig, seal, turtle, pig]
    }
  }

  render() {
    return (
      <div className="App-cards">
        {this.state.images.map((image, i) => (
          <CardContainer key={i} image={image} number={i + 1} />
        ))}
      </div>
    );
  }
}

export default App;
