import PokemonList from "./components/PokemonList";
import "./styles.css";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import Pokemon from "./components/Pokemon";
import { Component } from "react";
import { Button, TextField } from "@material-ui/core";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ""
    };
  }

  searchInputChange = (text) => {
    this.setState({
      searchText: text
    });
  };

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to="/">Home</NavLink>
          <div className="searchBoxContainer">
            <TextField
              size="small"
              label="Search Pokemon here..."
              variant="outlined"
              value={this.state.searchText}
              onChange={(event) => this.searchInputChange(event.target.value)}
            />
            <Button variant="outlined" size="small">
              <NavLink
                to={`/pokemon/${this.state.searchText.toLocaleLowerCase()}`}
              >
                Search
              </NavLink>
            </Button>
          </div>
        </nav>
        <Switch>
          <Route path={"/"} exact component={PokemonList} />
          <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
          <Redirect to={"/"} />
        </Switch>
      </div>
    );
  }
}
