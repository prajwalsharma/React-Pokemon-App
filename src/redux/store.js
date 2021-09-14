import { applyMiddleware, combineReducers, createStore } from "redux";
import { PokemonListReducer } from "./PokemonList/pokemonListReducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  PokemonList: PokemonListReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
