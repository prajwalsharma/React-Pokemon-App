import PokemonList from "./components/PokemonList";
import "./styles.css";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import Pokemon from "./components/Pokemon";

export default function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/pokemon/test">Search</NavLink>
      </nav>
      <Switch>
        <Route path={"/"} exact component={PokemonList} />
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}
