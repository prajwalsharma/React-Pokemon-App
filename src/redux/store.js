import { applyMiddleware, combineReducers, createStore } from "redux";
import { PokemonListReducer } from "./PokemonList/pokemonListReducers";
import { PokemonReducer } from "../redux/Pokemon/pokemonReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  Pokemon: PokemonReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
