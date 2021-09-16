import axios from "axios";
import {
  POKEMON_DATA_FETCH,
  POKEMON_DATA_FETCH_SUCCESS,
  POKEMON_DATA_FETCH_FAILURE
} from "./pokemonListTypes";
import { store } from "../store";

export const pokemonDataFetch = () => {
  return {
    type: POKEMON_DATA_FETCH
  };
};

export const pokemonDataFetchSuccess = (pokemons, limit, offset) => {
  return {
    type: POKEMON_DATA_FETCH_SUCCESS,
    payload: pokemons,
    pageLimit: limit,
    pageOffset: offset
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
      .get(`https://pokeapi.co/api/v2/pokemon?limit=6&offset=0`)
      .then((response) => {
        dispatch(pokemonDataFetchSuccess(response.data.results, 6, 0));
      })
      .catch((error) => {
        dispatch(pokemonDataFetchFailure(error.message));
      });
  };
};

export const fetchMorePokemonDataFromAPI = () => {
  return (dispatch) => {
    dispatch(pokemonDataFetch());
    const limit = store.getState().PokemonList.limit;
    const offset = store.getState().PokemonList.offset + limit;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((response) => {
        dispatch(pokemonDataFetchSuccess(response.data.results, limit, offset));
      })
      .catch((error) => {
        dispatch(pokemonDataFetchFailure(error.message));
      });
  };
};
