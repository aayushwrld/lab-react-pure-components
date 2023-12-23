import React, { Component } from 'react'

export default class SimpleCounterComponent extends Component {
    constructor(){
        super();
        this.state = {
            count: 0,
            toggle: true
        }
    }
  render() {
    console.warn("This is a simple component")
    return (
        <>
        <hr />
      <h2>Simple Counter Component</h2>
      <h2>Count {this.state.count}</h2>
      <br />
      <button onClick={()=>{
        this.setState({
            toggle: !this.state.toggle
        })
      }}
      style={{
        backgroundColor: `${this.state.toggle ? "green" : "red"}`
      }}
      >Toggle</button>
      <br /><br />
      <button onClick={()=>{
        if (this.state.toggle){
            this.setState({
                count: this.state.count + 1
            })
        }
      }}
      >Counter</button>
      <hr />
        </>

    )
  }
}
