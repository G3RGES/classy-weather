import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { location: "" };
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  fetchWeather = () => {};

  render() {
    return (
      <div className="app">
        <h1>Classy Weather</h1>

        <div>
          <input
            type="text"
            placeholder="Search for a city...."
            value={this.state.location}
            onChange={(e) => this.setState({ location: e.target.value })}
          />
        </div>

        <button onClick={this.fetchWeather} style={{}}>
          Get Weather
        </button>
      </div>
    );
  }
}
