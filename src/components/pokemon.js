import React, { Component } from 'react'
import Pokedex from './Pokedex';
import Header from './header';
import Stats from './Stats'
class Pokemon extends Component {
    state = {
        pokemon: {}
    }
    componentWillMount = () => {
        if(!this.props.location.state){
            let searchFor = this.props.match.params.id.toLowerCase();
            let pokemon = Pokedex.find(function(e){
                return e.species.toLocaleLowerCase() === searchFor;
            });
            this.setState({pokemon});
        }else{
            this.setState({pokemon : this.props.location.state.pokemon});
        }
    }

    render(){
        let pokemon = this.state.pokemon;
        console.log(pokemon)
        return (
            <div className="container Pokemon">
                <Header />
                <div className="row justify-content-center">
                    <h1>#{pokemon.num} - {pokemon.species}</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xs-12 col-sm-4 d-flex justify-content-center">
                        <img className='img-responsive bg-dark' src={`../assets/img/full/${pokemon.num}.png`} alt={pokemon.species}/>
                    </div>
                </div>
                <h2 className="text-center">Info</h2>
                <div className="row justify-content-center">
                    <div className="col-xs-5 col-sm-3">
                        <h5>Type(s):</h5>
                        {Object.keys(pokemon.types).map(type =>{ return (<p key={type}> {pokemon.types[type]}</p>)})}
                    </div>
                    <div className="col-xs-5 col-sm-3">
                        <h5>Abilities:</h5>
                        {Object.keys(pokemon.abilities).map(ability =>{ return (<p key={ability}>{ability}: {pokemon.abilities[ability]}</p>)})}
                    </div>
                    <div className="col-xs-5 col-sm-3">
                        <h5>Size:</h5>
                        <p>H: {pokemon.heightm}m</p>
                        <p>W: {pokemon.weightkg}kg</p>
                    </div>
                    <div className="col-xs-5 col-sm-3">
                        <h5>Egg Group(s):</h5>
                        {pokemon.eggGroups.map(group => {
                            return <p key={group}>{group}</p>
                        })}
                    </div>
                </div>
                <h2 className="text-center">Stats</h2>
                <div className="row justify-content-center">
                        <Stats stats={pokemon.baseStats}/>
                </div>
            </div>
        );
    }
}
export default Pokemon;