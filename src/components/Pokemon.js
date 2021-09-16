import { fetchPokemonFromAPI } from "../redux/Pokemon/pokemonHelpers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Pokemon = (props) => {
  const pokemonNameParameter = props.match.params.pokemon;
  const state = useSelector((state) => state.Pokemon);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonFromAPI(pokemonNameParameter));
  }, [pokemonNameParameter]);

  if (state.loading) {
    return <h1>Loading...</h1>;
  }

  if (state.error !== "") {
    return <h1>{state.error}</h1>;
  }

  return (
    <div className="pokemonContainer">
      {state.pokemon && (
        <div className={`pokemonCard ${state.pokemon.type}`}>
          <h1>#{state.pokemon.id}</h1>
          {state.pokemon.url && (
            <img
              alt={state.pokemon.name}
              src={state.pokemon.url}
              height="150px"
              width="300px"
            />
          )}
          <h2>
            {state.pokemon.name[0].toUpperCase() +
              state.pokemon.name.slice(1).toLowerCase()}
          </h2>
          <h3>
            Type:{" "}
            {state.pokemon.type[0].toUpperCase() +
              state.pokemon.type.slice(1).toLowerCase()}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
