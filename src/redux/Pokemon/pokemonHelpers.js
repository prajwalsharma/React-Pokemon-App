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
        const pokemonObject = response.data;
        const data = {
          name: pokemonObject.name,
          url: pokemonObject.sprites.other.dream_world.front_default,
          id: pokemonObject.id,
          type: pokemonObject.types[0].type.name
        };
        dispatch(fetchPokemonSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchPokemonFailure(error.message));
      });
  };
};
