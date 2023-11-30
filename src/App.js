import React, { Component } from 'react'

export default class App extends Component {
  state = {
    name : "Gani T Thirumala"
  }
  render() {
    return (
      <div>
        <center>
          <h2>{this.state.name}</h2>
        </center>
      </div>
    )
  }
}

