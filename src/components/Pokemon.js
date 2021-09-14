import React, { Component } from "react";

export class Pokemon extends Component {
  render() {
    const pokemonName = this.props.match.params.pokemon;
    return (
      <h1>
        Pokemon Name:
        <span> {pokemonName}</span>
      </h1>
    );
  }
}

export default Pokemon;
