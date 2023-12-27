import React, { Component } from "react";

export default class SimpleCounterComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      toggle: true,
    };
  }

  render() {
    console.warn("This is a simple Component");
    return (
      <div>
        <h2>Simple Component</h2>
        <h3>{this.state.count}</h3>
        <button
          style={{
            backgroundColor: `${this.state.toggle ? "green" : "red"}`,
            color: "white",
          }}
          onClick={() => {
            this.setState({ toggle: !this.state.toggle });
          }}
        >
          Toggle
        </button>
        <button
          onClick={() => {
            if (this.state.toggle) {
              this.setState({ count: this.state.count + 1 });
            } 
            else {
              this.setState({ count: this.state.count });
            }
          }}
        >
          Counter
        </button>
      </div>
    );
  }
}