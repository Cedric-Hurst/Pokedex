import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component { 
    render() {
        let winLose = this.props.isWinner ? 'Winner' : 'Loser';
        return (
            <div className="Pokedex">
                <div className={`Pokedex-${winLose}`}>
                    <h1>Pokedex</h1>
                    <p>Total Experience: {this.props.exp}</p>
                    <p>{winLose}</p>
                    <div className="Pokedex-cards">
                        {this.props.defPoke.map(p => (
                            <Pokecard
                                id={p.id}
                                name={p.name}
                                type={p.type}
                                base_experience={p.base_experience}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
export default Pokedex;