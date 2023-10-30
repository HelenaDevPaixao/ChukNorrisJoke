import React, { Component } from "react";
import axios from "axios";

class ChuckNorrisJoke extends Component {
  state = {
    joke: ""
  };

  componentDidMount() {
    // Faz a solicitação à API
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((response) => {
        this.setState({ joke: response.data.value });
      })
      .catch((error) => {
        console.error("Erro ao buscar piada de Chuck Norris", error);
      });
  }

  render() {
    return (
      <div>
        <h1>Chuck Norris Joke</h1>
        <p>{this.state.joke}</p>
      </div>
    );
  }
}

export default ChuckNorrisJoke;
