import React, { Component } from 'react'
import Pokedex from './Pokedex';
import Header from './header';
class Pokemon extends Component {
    state = {
        pokemon: {}
    }
    componentWillMount = () => {
        if(!this.props.location.state){
            let searchFor = this.props.match.params.id;
            let pokemon = Pokedex.find(function(e){
                return e.species === searchFor;
            });
            this.setState({pokemon});
        }else{
            this.setState({pokemon : this.props.location.state.pokemon});
        }
    }

    render(){
        let pokemon = this.state.pokemon;
        console.log(pokemon)
        const handleStats  = (stat, statName) =>{
                const maxstats = {hp: 225, atk: 190, def: 230, spa: 194, spd: 230, spe: 180};
                console.log(maxstats[statName]);
                let setStat = stat/maxstats[statName]*100;
                if(setStat < 25){
                    return 'progress-bar bg-danger';
                }else if(setStat < 50){
                    return 'progress-bar bg-warning';
                }else if(setStat < 75){
                    return 'progress-bar bg-info';
                }else if(setStat > 75){
                    return 'progress-bar bg-success';
                }
        }
        return (
            <div className="Container">
                <Header />
                <div className="row justify-content-center">
                    <h1>#{pokemon.num}:{pokemon.species}</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xs-12 col-sm-3">
                        <img className='img-responsive bg-dark' src={`../assets/img/full/${pokemon.num}.png`} alt={pokemon.species}/>
                    </div>
                </div>
                <h2 className="text-center">Stats</h2>
                <div className="row justify-content-center">
                    
                    <div className="col-xs-12 col-sm-3">
                        HP: {pokemon.baseStats.hp}
                        <div className="progress">
                            <div className={handleStats(pokemon.baseStats.hp, 'hp')} style={{width: `${pokemon.baseStats.hp/225*100}%`}}></div>
                        </div>
                        Attack: {pokemon.baseStats.atk}
                        <div className="progress">
                            <div className={handleStats(pokemon.baseStats.atk, 'atk')} style={{width: `${pokemon.baseStats.atk/225*100}%`}}></div>
                        </div>
                        Defence: {pokemon.baseStats.def}
                        <div className="progress">
                            <div className={handleStats(pokemon.baseStats.def, 'def')} style={{width: `${pokemon.baseStats.def/225*100}%`}}></div>
                        </div>
                        Special Attack: {pokemon.baseStats.spa}
                        <div className="progress">
                            <div className={handleStats(pokemon.baseStats.spa, 'spa')} style={{width: `${pokemon.baseStats.spa/225*100}%`}}></div>
                        </div>
                        Special Defence: {pokemon.baseStats.spd}
                        <div className="progress">
                            <div className={handleStats(pokemon.baseStats.spd, 'spd')} style={{width: `${pokemon.baseStats.spd/225*100}%`}}></div>
                        </div>
                        Speed: {pokemon.baseStats.spe}
                        <div className="progress">
                            <div className={handleStats(pokemon.baseStats.spe, 'spe')} style={{width: `${pokemon.baseStats.spe/225*100}%`}}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Pokemon;