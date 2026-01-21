import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Classy Weather</h1>

        <div>
          <input type="text" placeholder="Search for a city...." />
        </div>
      </div>
    );
  }
}
