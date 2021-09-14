import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPokemonDataFromAPI } from "../redux/PokemonList/pokemonListActions";

class PokemonList extends Component {
  componentDidMount() {
    this.props.fetchPokemons();
  }

  render() {
    const { pokemonList } = this.props;
    return (
      <div>
        Pokemon List
        <div>
          {pokemonList.map((pokemon) => (
            <p>{pokemon.name}</p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pokemonList: state.pokemons
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPokemons: () => dispatch(fetchPokemonDataFromAPI())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
