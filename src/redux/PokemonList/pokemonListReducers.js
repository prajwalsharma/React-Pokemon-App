import {
  POKEMON_DATA_FETCH,
  POKEMON_DATA_FETCH_SUCCESS,
  POKEMON_DATA_FETCH_FAILURE
} from "./pokemonListTypes";

const initialState = {
  loading: false,
  pokemons: [],
  error: ""
};

export const PokemonListReducer = (state = initialState, action) => {
  switch (action.type) {
    case POKEMON_DATA_FETCH:
      return {
        ...state,
        loading: true
      };
    case POKEMON_DATA_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemons: action.payload
      };
    case POKEMON_DATA_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
