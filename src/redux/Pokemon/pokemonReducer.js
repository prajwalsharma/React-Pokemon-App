import {
  FETCH_POKEMON,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE
} from "./pokemonTypes";

const initialState = {
  loading: false,
  pokemon: [],
  error: ""
};

export const PokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON:
      return {
        ...state,
        loading: true,
        error: "",
        pokemon: []
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemon: action.payload,
        error: ""
      };
    case FETCH_POKEMON_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        pokemon: []
      };
    default:
      return state;
  }
};
