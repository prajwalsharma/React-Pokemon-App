import React, { Component } from "react";

export class Pokemon extends Component {
  componentDidMount() {
    console.log(this.props);
    alert(this.props.match.params.pokemon);
  }

  render() {
    console.log(this.props);
    return <div>Pokemon</div>;
  }
}

export default Pokemon;
