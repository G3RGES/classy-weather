import React, { Component } from "react";

export default class App extends Component {
  render() {
    return <div></div>;
  }
}

// export default class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//     this.handleDecrement = this.handleDecrement.bind(this);
//     this.handleIncrement = this.handleIncrement.bind(this);
//   }

//   handleDecrement = () => {
//     this.setState((prevState) => ({ count: prevState.count - 1 }));
//   };
//   handleIncrement = () => {
//     this.setState((prevState) => ({ count: prevState.count + 1 }));
//   };

//   render() {
//     const date = new Date("2024-06-01T12:00:00");
//     date.setDate(date.getDate() + this.state.count);

//     return (
//       <div>
//         <h1>Counter App</h1>
//         <button onClick={this.handleDecrement}>-</button>
//         <span>
//           {" "}
//           {date.toDateString()} [{this.state.count}]
//         </span>
//         <button onClick={this.handleIncrement}>+</button>
//       </div>
//     );
//   }
// }
