import React, { Component } from 'react';
import './Pokecard.css';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
class Pokecard extends Component {
    render() {
        const { id, name, type, base_experience } = this.props;
        let imgSrc = '';
        if (id < 10) {
            imgSrc = `${POKE_API}00${id}.png`;
        } else if (id < 100) {
            imgSrc = `${POKE_API}0${id}.png`;
        } else {
            imgSrc = `${POKE_API}${id}.png`;
        }
        return (
            <div className='Pokecard'>
                <h1 className='Pokecard-name'>{name}</h1>
                <img src={imgSrc} alt={''}></img>
                <div className='Pokecard-p'>Type: {type}</div>
                <div className='Pokecard-p'>Exp: {base_experience}</div>
            </div>
        );
    }
}
export default Pokecard;