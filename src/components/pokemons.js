import React, { Component } from 'react';
import Pokedex from './Pokedex';
import Pokemontd from './pokemontd';



class Pokemons extends Component {
    state ={
        pokedex: [],
        search: ``
    }
    updateSearch(e){
        this.setState({search: e.target.value.substr(0,20)});
    }
    componentWillMount(){
        this.setState({pokedex: Pokedex});
    }
  render() {
    let filteredResults = this.state.pokedex.filter((pokemon) => {
        return pokemon.species.toLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1;
    });
    return (
      <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <form className="form-inline justify-content-center" >
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
                </form>
            </div>
        </div>
        <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col" className='num'>#</th>
                        <th scope="col">Sprite</th>
                        <th scope="col">Species</th>
                        <th scope="col">Type</th>
                    </tr>
                </thead>
                <tbody>
                    <Pokemontd pokemon={filteredResults}/>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
export default Pokemons;