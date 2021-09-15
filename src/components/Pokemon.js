import { fetchPokemonFromAPI } from "../redux/Pokemon/pokemonHelpers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonFromAPI(pokemonName));
  }, [pokemonName, dispatch]);

  const state = useSelector((state) => state.Pokemon);

  if (state.loading) {
    return <h1>Loading...</h1>;
  }

  if (state.error !== "") {
    return <h1>{state.error}</h1>;
  }

  return (
    <div>
      <h1>
        Pokemon Name:
        <span> {state.pokemon.name}</span>
      </h1>
      <img
        alt={state.pokemon.name}
        src={state.pokemon.sprites.other.dream_world.front_default}
      />
    </div>
  );
};

export default Pokemon;
