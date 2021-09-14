import axios from "axios";
import {
  POKEMON_DATA_FETCH,
  POKEMON_DATA_FETCH_SUCCESS,
  POKEMON_DATA_FETCH_FAILURE
} from "./pokemonListTypes";

export const pokemonDataFetch = () => {
  return {
    type: POKEMON_DATA_FETCH
  };
};

export const pokemonDataFetchSuccess = (pokemons) => {
  return {
    type: POKEMON_DATA_FETCH_SUCCESS,
    payload: pokemons
  };
};

export const pokemonDataFetchFailure = (error) => {
  return {
    type: POKEMON_DATA_FETCH_FAILURE,
    payload: error
  };
};

// Implementations

export const fetchPokemonDataFromAPI = () => {
  return (dispatch) => {
    dispatch(pokemonDataFetch());
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        console.log(response.data);
        dispatch(pokemonDataFetchSuccess(response.data.results));
      })
      .catch((error) => {
        dispatch(pokemonDataFetchFailure(error));
      });
  };
};
