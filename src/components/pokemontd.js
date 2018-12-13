import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Pokemontd extends Component {
  render() {
    const resolveTypes = (pokemon) => {
        if(pokemon.types.length === 1){
            return (<span className="types"><span className={pokemon.types[0]}>{pokemon.types[0]}</span></span>);
        }else{
            return (<span className="types"><span className={pokemon.types[0]}>{pokemon.types[0]}</span><br/><span className={pokemon.types[1]}>{pokemon.types[1]}</span></span>);
       }
    }
    const pokedex = this.props.pokemon.map(pokemon =>(
        <tr key={pokemon.species} className="table-row">
            <th scope="row" className="num">{pokemon.num}</th>
            <td><img src={`./assets/img/sprites/${pokemon.num}MS.png`} alt={pokemon.species}/></td>
            <td>
                <Link to={{
                    pathname: `/pokemon/${pokemon.species}`,
                    state: {pokemon}
                }}>
                    {pokemon.species}
                </Link>
            </td>
            <td>{resolveTypes(pokemon)}</td>
        </tr>
    ));
    return (
      pokedex
    )
  }
}

export default Pokemontd;