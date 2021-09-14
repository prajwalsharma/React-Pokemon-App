import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPokemonDataFromAPI } from "../redux/PokemonList/pokemonListActions";
import { Link } from "react-router-dom";

class PokemonList extends Component {
  componentDidMount() {
    this.props.fetchPokemons();
  }

  render() {
    const { pokemonList, isLoading, errorMessage } = this.props;

    // Error Handling
    if (errorMessage !== "") {
      return <p>{errorMessage}</p>;
    }

    // Loading Handling
    if (isLoading) {
      return <p>Loading...</p>;
    }

    // UI Handling
    return (
      <div>
        <h1>Pokemon List</h1>
        <div className="pokemonListContainer">
          {pokemonList.map((pokemon) => (
            <div className="pokemonListItem">
              <p className="capitalize">{pokemon.name}</p>
              <Link to={`/pokemon/${pokemon.name}`}>View</Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pokemonList: state.PokemonList.pokemons,
    isLoading: state.PokemonList.loading,
    errorMessage: state.PokemonList.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPokemons: () => dispatch(fetchPokemonDataFromAPI())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
