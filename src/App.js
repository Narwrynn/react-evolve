import React, { Component } from 'react';
import './App.css';


import Pokemons from './components/pokemons';
import Header from './components/header';

class App extends Component {


  render() {
    return (
      <div className="Container-fluid bg-dark">
        <Header />
        <Pokemons />
      </div>
    );
  }
}

export default App;
