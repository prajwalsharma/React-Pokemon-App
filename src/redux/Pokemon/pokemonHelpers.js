import axios from "axios";
import {
  fetchPokemon,
  fetchPokemonSuccess,
  fetchPokemonFailure
} from "./pokemonActions";

// Fetch pokemon data from API based on pokemon name
export const fetchPokemonFromAPI = (pokemonName) => {
  return (dispatch) => {
    dispatch(fetchPokemon());
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        dispatch(fetchPokemonSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchPokemonFailure(error.message));
      });
  };
};
