import { applyMiddleware, createStore } from "redux";
import { PokemonListReducer } from "./PokemonList/pokemonListReducers";
import thunk from "redux-thunk";

export const store = createStore(PokemonListReducer, applyMiddleware(thunk));
